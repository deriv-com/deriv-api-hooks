import { createContext, MutableRefObject, PropsWithChildren, useEffect, useMemo, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Subscription } from 'rxjs';
// @ts-expect-error Deriv API is not typed
import DerivAPI from '@deriv/deriv-api/dist/DerivAPIBasic';
import { URLUtils } from '@deriv-com/utils';
import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from '../types/api.types';

const queryClient = new QueryClient();

type TSendFunction = <T extends TSocketEndpointNames>(
    name: T,
    payload?: TSocketRequestPayload<T>
) => Promise<TSocketResponseData<T> & TSocketError<T>>;

type APIData = {
    derivAPI: DerivAPI;
    subscriptions: MutableRefObject<Record<string, Subscription> | null>;
    send: TSendFunction;
};

export const APIDataContext = createContext<APIData | null>(null);

/**
 * Provides a React Query client and API data context to its child components.
 *
 * It initializes and manages the lifecycle of a DerivAPI instance for WebSocket communication,
 * along with a mechanism to track and manage active subscriptions.
 *
 * @param {PropsWithChildren} { children } - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component wrapping its children with API data context and React Query client.
 */
export const APIProvider = ({ children }: PropsWithChildren) => {
    const derivAPI = useRef<DerivAPI>(new DerivAPI({ connection: new WebSocket(URLUtils.getWebsocketURL()) }));
    const subscriptions = useRef<Record<string, Subscription> | null>(null);

    /**
     * Function to send a request to a specific WebSocket endpoint using the DerivAPI.
     */
    const send: TSendFunction = (name, payload) => derivAPI.current?.send({ [name]: 1, ...payload });

    useEffect(() => {
        const currentDerivApi = derivAPI.current;
        const currentSubscriptions = subscriptions.current;

        // Cleanup function to unsubscribe from all active subscriptions and disconnect the WebSocket connection.
        return () => {
            if (currentSubscriptions) {
                Object.keys(currentSubscriptions).forEach(key => {
                    currentSubscriptions[key].unsubscribe();
                });
            }
            if (currentDerivApi && currentDerivApi.connection.readyState === 1) currentDerivApi.disconnect();
        };
    }, []);

    const value = useMemo(() => ({ derivAPI: derivAPI.current, subscriptions, send }), [derivAPI, subscriptions, send]);

    return (
        <APIDataContext.Provider value={value}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </APIDataContext.Provider>
    );
};
