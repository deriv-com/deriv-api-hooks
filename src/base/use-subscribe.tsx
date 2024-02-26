import { TSocketRequestPayload, TSocketResponseData, TSocketSubscribableEndpointNames } from "../types/api.types";
import { useAPI } from "./use-context-hooks";
import { useState } from "react";
import { ObjectUtils } from "@deriv-com/utils";

type TSubscriptionStatus = "loading" | "error" | "idle" | "active";

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
    const { derivAPI, subscriptions } = useAPI();
    const [data, setData] = useState<TSocketResponseData<T>>();
    const [status, setStatus] = useState<TSubscriptionStatus>("loading");
    const [subscription_id, setSubscriptionId] = useState("");

    /**
     * Creates a new subscription or returns an existing one if it matches the provided payload.
     *
     * @param {TSocketRequestPayload<T>} payload - The payload to be sent for the subscription.
     * @returns {Promise<{id: string, subscription: Subscription}>}
     * An object containing the `id` of the subscription and the `subscription` object itself.
     */
    const createSubscription = async (payload: TSocketRequestPayload<T>) => {
        const id = await ObjectUtils.hashObject({ name, payload });
        const matchingSubscription = subscriptions.current?.[id];
        if (matchingSubscription) return { id, subscription: matchingSubscription };

        const subscription = derivAPI.current?.subscribe({ [name]: 1, subscribe: 1, ...(payload || {}) });
        subscriptions.current = { ...(subscriptions.current || {}), ...{ [id]: subscription } };
        return { id, subscription };
    };

    /**
     * Subscribes to a WebSocket endpoint.
     *
     * @param {TSocketRequestPayload<T>} payload - The payload for the subscription.
     */
    const subscribe = async (payload: TSocketRequestPayload<T>) => {
        const { id, subscription } = await createSubscription(payload);
        setSubscriptionId(id);
        subscription.subscribe((response: TSocketResponseData<T>) => {
            setStatus("active");
            return setData(response);
        });
    };

    /**
     * Unsubscribes from the current WebSocket endpoint.
     */
    const unsubscribe = () => {
        const matchingSubscription = subscriptions.current?.[subscription_id];
        if (matchingSubscription) matchingSubscription.unsubscribe();
    };

    return {
        data,
        subscribe,
        unsubscribe,
        isActive: status === "active",
        isError: status === "error",
        isIdle: status === "idle",
        isLoading: status === "loading",
    };
};
