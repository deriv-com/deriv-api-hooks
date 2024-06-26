import { useState, useEffect, useRef } from 'react';
import { useAPI } from './use-context-hooks';
import {
    TSocketSubscribableEndpointNames,
    TSocketRequestPayload,
    TSocketError,
    TSocketSubscribeResponseData,
} from '../types/api.types';

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

export const useSubscribe = <T extends TSocketSubscribableEndpointNames>(name: T, timeout = 30000) => {
    const { derivAPIClient } = useAPI();
    const timeoutRef = useRef<NodeJS.Timeout>();
    const internalHash = useRef<string | null>(null);
    const internalId = useRef<number | null>(null);
    const [data, setData] = useState<TSocketSubscribeResponseData<T>>();
    const [error, setError] = useState<TSocketError<T>['error'] | undefined>();
    const [status, setStatus] = useState<TSubscriptionStatus>('loading');

    const isActive = status === 'active';
    const isError = status === 'error';
    const isIdle = status === 'idle';
    const isLoading = status === 'loading';

    const subscribe = async (payload: TSocketRequestPayload<T>) => {
        if (!internalHash.current && !internalId.current) {
            const { id, hash } = await derivAPIClient.subscribe({
                name,
                payload,
                onData: (data: TSocketSubscribeResponseData<TSocketSubscribableEndpointNames>) => {
                    clearTimeout(timeoutRef.current);
                    setData(data as TSocketSubscribeResponseData<T>);
                    setStatus('active');
                },
                onError: (error: TSocketError<T>['error']) => {
                    setError(error);
                    setStatus('error');
                },
            });
            internalHash.current = hash;
            internalId.current = id;
        }
    };

    const unsubscribe = async () => {
        if (internalId.current && internalHash.current) {
            clearTimeout(timeoutRef.current);
            await derivAPIClient.unsubscribe({ id: internalId.current, hash: internalHash.current });
            setStatus('loading');
        }
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setStatus('idle');
        }, timeout);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [data]);

    return {
        data,
        error,
        subscribe,
        unsubscribe,
        isActive,
        isError,
        isIdle,
        isLoading,
        status,
    };
};
