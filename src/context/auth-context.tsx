import { ReactNode, createContext, useEffect, useState } from "react";
import { LocalStorageUtils, URLUtils } from "@deriv-com/utils";
import { useAuthorize } from "../api/non-authorize/use-authorize";

type AuthData = {
    activeLoginid: string;
    isAuthorized: boolean;
    switchAccount: (account: URLUtils.LoginInfo) => void;
    getActiveAccount: () => URLUtils.LoginInfo | null | undefined;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const [activeLoginid, setActiveLoginid] = useState("");
    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();
    const { mutate, isSuccess } = useAuthorize();

    const authorizeAccount = (loginid: string, token: string) => {
        mutate({ authorize: token });
        setActiveLoginid(loginid);
        LocalStorageUtils.setValue("client.active_loginid", loginid);
    };

    const getActiveAccount = () => {
        const accountList = LocalStorageUtils.getValue<URLUtils.LoginInfo[]>("client.account_list");
        return accountList?.find((acc) => acc.loginid === activeLoginid);
    };

    const switchAccount = (account: URLUtils.LoginInfo) => {
        if (account.loginid !== activeLoginid) {
            authorizeAccount(account.loginid, account.token);
        }
    };

    useEffect(() => {
        if (loginInfo.length) {
            const defaultActiveAccount = URLUtils.getDefaultActiveAccount(loginInfo);
            if (!defaultActiveAccount) return;
            LocalStorageUtils.setValue("client.account_list", loginInfo);
            URLUtils.filterSearchParams(paramsToDelete);
            authorizeAccount(defaultActiveAccount.loginid, defaultActiveAccount.token);
        } else {
            let activeLoginId = "";
            const accountList = LocalStorageUtils.getValue<URLUtils.LoginInfo[]>("client.account_list");
            if (accountList?.length) {
                activeLoginId = LocalStorageUtils.getValue<string>("client.active_loginid") || "";
                if (!activeLoginId) {
                    const defaultActiveAccount = URLUtils.getDefaultActiveAccount(accountList);
                    if (defaultActiveAccount) {
                        activeLoginId = defaultActiveAccount.loginid;
                    }
                }
                authorizeAccount(activeLoginId, accountList.find((acc) => acc.loginid === activeLoginId)!.token);
            }
        }
    }, []);

    return (
        <AuthDataContext.Provider
            value={{ activeLoginid, isAuthorized: !!activeLoginid && isSuccess, switchAccount, getActiveAccount }}
        >
            {children}
        </AuthDataContext.Provider>
    );
};
