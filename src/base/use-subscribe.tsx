import { useState, useEffect, useRef } from 'react';
import { useAPI } from './use-context-hooks';
import {
    TSocketSubscribableEndpointNames,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketError,
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
    const timeoutRef = useRef<NodeJS.Timeout>();
    const { derivAPIClient } = useAPI();
    const [data, setData] = useState<TSocketResponseData<T>>();
    const [error, setError] = useState<TSocketError<T>['error'] | undefined>();
    const [status, setStatus] = useState<TSubscriptionStatus>('loading');
    const [subscriptionId, setSubscriptionId] = useState<string>('');

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setStatus('idle');
        }, timeout);
    }, [data]);

    const subscribe = async (payload: TSocketRequestPayload<T>) => {
        const id = await derivAPIClient.subscribe(
            name,
            payload,
            (data: TSocketResponseData<T>) => {
                clearTimeout(timeoutRef.current);
                setData(data);
                setStatus('active');
            },
            (error: TSocketError<T>['error']) => {
                setError(error);
                setStatus('error');
            }
        );
        setSubscriptionId(id);
    };

    const unsubscribe = () => {
        clearTimeout(timeoutRef.current);
        derivAPIClient.unsubscribe(subscriptionId);
        setStatus('loading');
    };

    const isActive = status === 'active';
    const isError = status === 'error';
    const isIdle = status === 'idle';
    const isLoading = status === 'loading';

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
