import { ReactNode, createContext, useCallback, useEffect, useMemo } from 'react';
import { URLUtils } from '@deriv-com/utils';
import { useAuthorize } from '../api/mutation/use-authorize';
import { useAppData } from '../base';
import Cookies from 'js-cookie';

type AccountsList = {
    loginid: string;
    token: string;
    currency: string;
}[];

type AuthData = {
    activeLoginid: string;
    isAuthorized: boolean;
    isAuthorizing: boolean;
    switchAccount: (loginid: string) => void;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const { activeLoginid, setActiveLoginid } = useAppData();
    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();

    const { data, mutate, isSuccess, isPending } = useAuthorize();

    const authorizeAccount = useCallback((token?: string) => {
        if (token) mutate({ authorize: token });
    }, []);

    const switchAccount = useCallback(
        (loginId: string) => {
            const accountsList: AccountsList = JSON.parse(Cookies.get('accountsList') ?? '[]');

            const token = accountsList.find(account => account.loginid === loginId)?.token;
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
            Cookies.set('accountsList', JSON.stringify(loginInfo));

            URLUtils.filterSearchParams(paramsToDelete);
            authorizeAccount(loginInfo[0].token);
            Cookies.set('authToken', loginInfo[0].token);
        } else {
            const token = Cookies.get('authToken');
            if (!token) return;

            authorizeAccount(token);
        }
    }, []);

    const value = useMemo(
        () => ({
            activeLoginid,
            isAuthorized: !!activeLoginid && isSuccess,
            isAuthorizing: isPending,
            switchAccount,
        }),
        [activeLoginid, isSuccess]
    );

    return <AuthDataContext.Provider value={value}>{children}</AuthDataContext.Provider>;
};
