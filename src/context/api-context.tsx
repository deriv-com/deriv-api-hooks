import { createContext, MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Observable, Subscription } from "rxjs";
// @ts-expect-error Deriv API is not typed
import DerivAPI from "@deriv/deriv-api/dist/DerivAPIBasic";
import { URLUtils } from "@deriv-com/utils";
import {
    TSocketEndpointNames,
    TSocketError,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from "../types/api.types";

const queryClient = new QueryClient();

type TSendFunction = <T extends TSocketEndpointNames>(
    name: T,
    payload?: TSocketRequestPayload<T>
) => Promise<TSocketResponseData<T> & TSocketError<T>>;

type TSubscribeFunction = <T extends TSocketSubscribableEndpointNames>(
    name: T,
    payload?: TSocketRequestPayload<T>
) => Promise<{ id: string; subscription: Observable<TSocketResponseData<T> & TSocketError<T>> }>;

type TUnsubscribeFunction = (id: string) => void;

type APIData = {
    derivAPI: DerivAPI;
    subscriptions: MutableRefObject<Record<string, Subscription> | null>;
};

export const APIDataContext = createContext<APIData | null>(null);

export const APIProvider = ({ children }: PropsWithChildren) => {
    const derivAPI = useRef<DerivAPI>(new DerivAPI({ connection: new WebSocket(URLUtils.getWebsocketURL()) }));
    const subscriptions = useRef<Record<string, Subscription> | null>(null);

    const send: TSendFunction = (name, payload) => {
        return derivAPI.current?.send({ [name]: 1, ...payload });
    };

    useEffect(() => {
        const currentDerivApi = derivAPI.current;
        const currentSubscriptions = subscriptions.current;

        return () => {
            if (currentSubscriptions) {
                Object.keys(currentSubscriptions).forEach((key) => {
                    currentSubscriptions[key].unsubscribe();
                });
            }
            if (currentDerivApi && currentDerivApi.connection.readyState === 1) currentDerivApi.disconnect();
        };
    }, []);

    return (
        <APIDataContext.Provider value={{ derivAPI: derivAPI.current, subscriptions }}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </APIDataContext.Provider>
    );
};
