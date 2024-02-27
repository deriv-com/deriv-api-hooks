import { LocalStorageUtils, URLUtils } from "@deriv-com/utils";
import { ReactNode, createContext, useEffect, useState } from "react";

const getActiveLoginid = (loginInfo: URLUtils.AccountInfo[]) => {
    return loginInfo.find((acc) => /^VR/.test(acc.loginid))?.loginid || loginInfo[0].loginid;
};

type AuthData = {
    activeLoginid: string;
    switchAccount: (loginid: string) => void;
    getActiveAccount: () => URLUtils.AccountInfo | null | undefined;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    const [activeLoginid, setActiveLoginid] = useState(LocalStorageUtils.getValue("client.active_loginid") ?? "");
    const [accountList, setAccountList] = useState(
        LocalStorageUtils.getValue<URLUtils.AccountInfo[]>("client.account_list")
    );
    const getActiveAccount = () => accountList?.find((acc) => acc.loginid === activeLoginid);

    const switchAccount = (loginid: string) => {
        if (!loginid || loginid === activeLoginid) return;
        setActiveLoginid(loginid);
        LocalStorageUtils.setValue("client.active_loginid", loginid);
    };

    const { loginInfo, paramsToDelete } = URLUtils.getLoginInfoFromURL();
    if (loginInfo.length) {
        setAccountList(loginInfo);
        LocalStorageUtils.setValue("client.account_list", loginInfo);
        URLUtils.filterSearchParams(paramsToDelete);
        switchAccount(getActiveLoginid(loginInfo));
    }

    useEffect(() => {
        if (accountList?.length && !activeLoginid) {
            switchAccount(getActiveLoginid(accountList));
        }
    }, [accountList, activeLoginid, switchAccount]);

    return (
        <AuthDataContext.Provider value={{ activeLoginid, switchAccount, getActiveAccount }}>
            {children}
        </AuthDataContext.Provider>
    );
};
