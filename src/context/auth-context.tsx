import { ReactNode, createContext } from "react";

type AuthData = {
    activeLoginid: string;
};

export const AuthDataContext = createContext<AuthData | null>(null);

type AuthDataProviderProps = {
    children: ReactNode;
};

export const AuthDataProvider = ({ children }: AuthDataProviderProps) => {
    // const [activeLoginid, setActiveLoginid] = useState();

    return <AuthDataContext.Provider value={null}>{children}</AuthDataContext.Provider>;
};
