import { TSocketRequestPayload, TSocketResponseData, TSocketSubscribableEndpointNames } from "types/api.types";
import { useAPI } from "./use-api";
import { useState } from "react";
import { ObjectUtils } from "@deriv-com/utils";

type TSubscriptionStatus = "loading" | "error" | "idle" | "active";

export const useSubscribe = <T extends TSocketSubscribableEndpointNames>(name: T) => {
    const { derivAPI, subscriptions } = useAPI();
    const [data, setData] = useState<TSocketResponseData<T>>();
    const [status, setStatus] = useState<TSubscriptionStatus>("loading");
    const [subscription_id, setSubscriptionId] = useState("");

    const createSubscription = async (payload: TSocketRequestPayload<T>) => {
        const id = await ObjectUtils.hashObject({ name, payload });
        const matchingSubscription = subscriptions.current?.[id];
        if (matchingSubscription) return { id, subscription: matchingSubscription };

        const subscription = derivAPI.current?.subscribe({ [name]: 1, subscribe: 1, ...(payload || {}) });
        subscriptions.current = { ...(subscriptions.current || {}), ...{ [id]: subscription } };
        return { id, subscription };
    };

    const subscribe = async (payload: TSocketRequestPayload<T>) => {
        const { id, subscription } = await createSubscription(payload);
        setSubscriptionId(id);
        subscription.subscribe((response: TSocketResponseData<T>) => {
            setStatus("active");
            return setData(response);
        });
    };

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
