import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { AuthDataProvider } from "./auth-context";
import { APIProvider } from "./api-context";

type Environment = "real" | "demo";

type AppData = {
    environment: Environment;
    setEnvironment: Dispatch<SetStateAction<Environment>>;
};

export const AppDataContext = createContext<AppData | null>(null);

type AppDataProviderProps = {
    children: ReactNode;
};

export const AppDataProvider = ({ children }: AppDataProviderProps) => {
    const [environment, setEnvironment] = useState<Environment>("demo");

    return (
        <AppDataContext.Provider value={{ environment, setEnvironment }}>
            <AuthDataProvider>
                <APIProvider>{children}</APIProvider>
            </AuthDataProvider>
        </AppDataContext.Provider>
    );
};
