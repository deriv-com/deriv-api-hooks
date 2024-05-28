import {
    TSocketError,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from '../types/api.types';
import { useAPI } from './use-context-hooks';
import { useState } from 'react';

type TSubscriptionStatus = 'loading' | 'error' | 'idle' | 'active';

/**
 * A custom hook to subscribe to a specified WebSocket endpoint, manage subscription status, and handle data updates.
 *
 * @template T - A constraint that ensures `name` matches one of the subscribable WebSocket endpoint names.
 * @param {T} name - The name of the WebSocket endpoint to subscribe to.
 * @returns {Object} An object containing the subscription data, methods to subscribe and unsubscribe, and status flags.
 *
 * @returns {{
 *   data: TSocketResponseData<T> | undefined; // The latest data received from the subscription.
 *   subscribe: (payload: TSocketRequestPayload<T>) => Promise<void>; // Function to initiate the subscription with the provided payload.
 *   unsubscribe: () => void; // Function to terminate the active subscription.
 *   isActive: boolean; // Flag indicating whether the subscription is currently active.
 *   isError: boolean; // Flag indicating whether the subscription encountered an error.
 *   isIdle: boolean; // Flag indicating the subscription is idle (not active, loading, or in error state).
 *   isLoading: boolean; // Flag indicating the subscription is in the process of connecting or waiting for data.
 * }}
 */
export const useSubscribe = <T extends TSocketSubscribableEndpointNames>(name: T) => {
    const { derivAPIClient } = useAPI();
    const [data, setData] = useState<TSocketResponseData<T>>();
    const [error] = useState<TSocketError<T>>();
    const [status] = useState<TSubscriptionStatus>('loading');
    const [subscription_id, setSubscriptionId] = useState('');

    return {
        data,
        error,
        subscribe: async <T extends TSocketSubscribableEndpointNames>(payload: TSocketRequestPayload<T>) => {
            // @ts-expect-error lmao
            const id = await derivAPIClient.subscribe(name, payload, data => setData(data));
            setSubscriptionId(id);
        },
        unsubscribe: () => derivAPIClient.unsubscribe(subscription_id),
        isActive: status === 'active',
        isError: status === 'error',
        isIdle: status === 'idle',
        isLoading: status === 'loading',
    };
};
