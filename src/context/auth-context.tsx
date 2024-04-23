import { ReactNode, createContext, useCallback, useEffect, useMemo } from 'react';
import { URLUtils } from '@deriv-com/utils';
import { useAuthorize } from '../api/mutation/use-authorize';
import { useAppData } from '../base';
import Cookies from 'js-cookie';

type AuthData = {
    activeLoginid: string;
    isAuthorized: boolean;
    isAuthorizing: boolean;
    switchAccount: (loginid: string) => void;
    appendAccountCookie: (loginid: string, token: string) => void;
    logout: () => void;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const { activeLoginid, setActiveLoginid } = useAppData();
    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();

    const { data, mutate, isSuccess, isPending } = useAuthorize();

    const tradingAccounts: Record<string, string> = JSON.parse(Cookies.get('tradingAccounts') ?? '{}');
    const isAuthorized = useMemo(
        () => !!activeLoginid || !!Object.keys(tradingAccounts).length,
        [activeLoginid, tradingAccounts]
    );

    const authorizeAccount = useCallback((token?: string) => {
        if (token) mutate({ authorize: token });
    }, []);

    const switchAccount = useCallback(
        (loginId: string) => {
            const tradingAccounts: Record<string, string> = JSON.parse(Cookies.get('tradingAccounts') ?? '{}');

            const token = tradingAccounts[loginId];

            if (!token) return;
            authorizeAccount(token);

            Cookies.set('authToken', token);
        },
        [loginInfo]
    );

    useEffect(() => {
        if (isSuccess && data) {
            setActiveLoginid(data?.authorize?.loginid ?? '');
        }
    }, [isSuccess]);

    useEffect(() => {
        if (loginInfo.length) {
            const defaultActiveAccount = URLUtils.getDefaultActiveAccount(loginInfo);
            if (!defaultActiveAccount) return;

            setActiveLoginid(loginInfo[0].loginid);
            const tradingAccounts: Record<string, string> = {};

            loginInfo.forEach(account => {
                tradingAccounts[account.loginid] = account.token;
            });

            Cookies.set('tradingAccounts', JSON.stringify(tradingAccounts));

            URLUtils.filterSearchParams(paramsToDelete);
            authorizeAccount(loginInfo[0].token);
            Cookies.set('authToken', loginInfo[0].token);
        } else {
            const token = Cookies.get('authToken');
            if (!token) return;

            authorizeAccount(token);
        }
    }, []);

    const appendAccountCookie = useCallback((loginid: string, token: string) => {
        const tradingAccounts: Record<string, string> = JSON.parse(Cookies.get('tradingAccounts') ?? '{}');

        tradingAccounts[loginid] = token;

        Cookies.set('tradingAccounts', JSON.stringify(tradingAccounts));

        switchAccount(loginid);
    }, []);

    const logout = useCallback(() => {
        Cookies.remove('authToken');
        Cookies.remove('tradingAccounts');
        setActiveLoginid('');
    }, []);

    const value = useMemo(
        () => ({
            activeLoginid,
            isAuthorizing: isPending,
            switchAccount,
            appendAccountCookie,
            logout,
            isAuthorized,
        }),
        [activeLoginid, isSuccess]
    );

    return <AuthDataContext.Provider value={value}>{children}</AuthDataContext.Provider>;
};
