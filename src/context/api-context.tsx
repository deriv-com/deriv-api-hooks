import { createContext, PropsWithChildren, useEffect } from 'react';
import { DerivAPIClient } from '../client-library/deriv-api-client';

const derivAPIClient = new DerivAPIClient('wss://red.binaryws.com/websockets/v3?l=EN&app_id=1089&brand=deriv');

type APIData = {
    derivAPIClient: DerivAPIClient;
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
    useEffect(() => {
        return () => {
            derivAPIClient.cleanup();
        };
    }, []);

    return <APIDataContext.Provider value={{ derivAPIClient }}>{children}</APIDataContext.Provider>;
};
