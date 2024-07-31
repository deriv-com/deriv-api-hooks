import { ReactNode, createContext, useCallback, useEffect, useMemo } from 'react';
import { URLUtils } from '@deriv-com/utils';
import { useAuthorize } from '../api/mutation/use-authorize';
import { useAppData } from '../base';
import { TSocketError } from '../types/api.types';
import { useLogout } from '../api';

type AuthData = {
    activeLoginid: string;
    isAuthorized: boolean;
    isAuthorizing: boolean;
    switchAccount: (loginid: string) => void;
    appendAccountLocalStorage: (loginid: string, token: string) => void;
    logout: () => void;
    error: TSocketError<'authorize'>['error'] | null;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const { activeLoginid, setActiveLoginid } = useAppData();
    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();

    const { data, mutate, isSuccess, error, status } = useAuthorize();

    const { mutateAsync: requestLogout } = useLogout();

    const accountsList: Record<string, string> = JSON.parse(localStorage.getItem('client.accounts') ?? '{}');

    const isAuthorized = useMemo(
        () => isSuccess && (!!activeLoginid || !!Object.keys(accountsList).length),
        [activeLoginid, accountsList]
    );

    const URLParams = new URLSearchParams(window.location.search);
    const authURLParams = !!URLParams.get('acct1') || !!URLParams.get('token1');

    const isAuthorizing = authURLParams || (!!localStorage.getItem('authToken') && !isAuthorized);

    const authorizeAccount = useCallback((token?: string) => {
        if (token) mutate({ authorize: token });
    }, []);

    const switchAccount = useCallback(
        (loginId: string) => {
            const token = accountsList[loginId];

            if (!token) return;
            authorizeAccount(token);

            localStorage.setItem('authToken', token);
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

            localStorage.setItem('accountsList', JSON.stringify(accountsList));

            URLUtils.filterSearchParams(paramsToDelete);

            authorizeAccount(loginInfo[0].token);

            localStorage.setItem('authToken', loginInfo[0].token);
        } else {
            const token = localStorage.getItem('authToken');

            if (!token) return;

            authorizeAccount(token);
        }
    }, []);

    const appendAccountLocalStorage = useCallback((loginid: string, token: string) => {
        accountsList[loginid] = token;

        localStorage.setItem('accountsList', JSON.stringify(accountsList));

        switchAccount(loginid);
    }, []);

    const logout = useCallback(async () => {
        await requestLogout({
            loginid: activeLoginid,
        });
        localStorage.removeItem('authToken');
        localStorage.removeItem('accountsList');

        setActiveLoginid('');
    }, []);

    const value = useMemo(
        () => ({
            status,
            error,
            activeLoginid,
            isAuthorizing,
            switchAccount,
            appendAccountLocalStorage,
            logout,
            isAuthorized,
        }),
        [activeLoginid, isSuccess, error, status]
    );

    return <AuthDataContext.Provider value={value}>{children}</AuthDataContext.Provider>;
};
