import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from "types/api.types";
import { useAPI } from "./use-api";
import { UseMutationOptions, UseMutationResult, useMutation as useReactQueryMutation } from "@tanstack/react-query";

type TSocketRequestMutation<T extends TSocketEndpointNames> = {
    name: T;
} & UseMutationOptions<TSocketResponseData<T>, TSocketError<T>, TSocketRequestPayload<T>>;

export const useMutation = <T extends TSocketEndpointNames>({
    name,
    ...options
}: TSocketRequestMutation<T>): UseMutationResult<TSocketResponseData<T>, TSocketError<T>, TSocketRequestPayload<T>> => {
    const { send } = useAPI();

    return useReactQueryMutation<TSocketResponseData<T>, TSocketError<T>, TSocketRequestPayload<T>>({
        mutationFn: (payload) => send(name, payload),
        ...options,
    });
};
