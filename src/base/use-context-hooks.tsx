import { useContext } from "react";
import { APIDataContext } from "../context/api-context";
import { AuthDataContext } from "../context/auth-context";
import { AppDataContext } from "../context/app-data-context";

export const useAPI = () => {
    const context = useContext(APIDataContext);
    if (!context) {
        throw new Error("useAPI() must be used within APIProvider");
    }
    return context;
};

export const useAuthData = () => {
    const context = useContext(AuthDataContext);
    if (!context) {
        throw new Error("useAuthData() must be used within AuthDataProvider");
    }
    return context;
};

export const useAppData = () => {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error("useAppData() must be used within AppDataProvider");
    }
    return context;
};
