import { useRef } from "react";
import { TSocketSubscribableEndpointNames } from "../types/api.types";
import { useAuthData } from "./use-context-hooks";
import { useSubscribe } from "./use-subscribe";

export const useAuthorizedSubscription = <T extends TSocketSubscribableEndpointNames>(name: T) => {
    const { isAuthorized, activeLoginid, isAuthorizing } = useAuthData();
    const authTimeoutId = useRef<ReturnType<typeof setTimeout>>();
    const { subscribe, ...rest } = useSubscribe(name);
    const AUTH_TIMEOUT_DURATION = 30000;
    const authorizedSubscribe = async (payload: Parameters<typeof subscribe>[0]) => {
        if (isAuthorized && activeLoginid && !isAuthorizing) {
            subscribe(payload);
        } else {
            await new Promise((resolve, reject) => {
                authTimeoutId.current = setTimeout(() => {
                    if (isAuthorized && activeLoginid && !isAuthorizing) {
                        clearTimeout(authTimeoutId.current);
                        subscribe(payload).then(resolve).catch(reject);
                    }
                }, AUTH_TIMEOUT_DURATION);
            });
        }
    };
    return { ...rest, subscribe: authorizedSubscribe, };
};
