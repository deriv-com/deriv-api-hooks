import { ReactNode, createContext, useCallback, useEffect, useMemo } from 'react';
import { URLUtils } from '@deriv-com/utils';
import { useAuthorize } from '../api/mutation/use-authorize';
import { useAppData } from '../base';
import Cookies from 'js-cookie';
import { TSocketError } from '../types/api.types';

type AuthData = {
    activeLoginid: string;
    isAuthorized: boolean;
    isAuthorizing: boolean;
    switchAccount: (loginid: string) => void;
    appendAccountCookie: (loginid: string, token: string) => void;
    logout: () => void;
    error: TSocketError<"authorize">['error'] | null;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const { activeLoginid, setActiveLoginid } = useAppData();
    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();

    const { data, mutate, isSuccess, error, status } = useAuthorize();


    const accountsList: Record<string, string> = JSON.parse(Cookies.get('accountsList') ?? '{}');

    const isAuthorized = useMemo(
        () => isSuccess && (!!activeLoginid || !!Object.keys(accountsList).length),
        [activeLoginid, accountsList]
    );

    const URLParams = new URLSearchParams(window.location.search);
    const authURLParams = !!URLParams.get('acct1') || !!URLParams.get('token1');

    const isAuthorizing  = authURLParams || (!!Cookies.get('authToken') && !isAuthorized)

    const authorizeAccount = useCallback((token?: string) => {
        if (token) mutate({ authorize: token });
    }, []);

    const switchAccount = useCallback(
        (loginId: string) => {
            const token = accountsList[loginId];

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
            const accountsList: Record<string, string> = {};

            loginInfo.forEach(account => {
                accountsList[account.loginid] = account.token;
            });

            Cookies.set('accountsList', JSON.stringify(accountsList));

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
        accountsList[loginid] = token;

        Cookies.set('accountsList', JSON.stringify(accountsList));

        switchAccount(loginid);
    }, []);

    const logout = useCallback(() => {
        Cookies.remove('authToken');
        Cookies.remove('accountsList');
        setActiveLoginid('');
    }, []);

    const value = useMemo(
        () => ({
            status,
            error,
            activeLoginid,
            isAuthorizing,
            switchAccount,
            appendAccountCookie,
            logout,
            isAuthorized,
        }),
        [activeLoginid, isSuccess, error,status]
    );

    return <AuthDataContext.Provider value={value}>{children}</AuthDataContext.Provider>;
};
