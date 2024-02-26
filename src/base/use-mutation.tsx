import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from "types/api.types";
import { useAPI } from "./use-api";
import { UseMutationOptions, UseMutationResult, useMutation as useReactQueryMutation } from "@tanstack/react-query";

export type AugmentedMutationResult<T extends TSocketEndpointNames> = UseMutationResult<
    TSocketResponseData<T>,
    TSocketError<T>,
    TSocketRequestPayload<T>
>;

export type AugmentedMutationOptions<T extends TSocketEndpointNames> = {
    name: T;
} & UseMutationOptions<TSocketResponseData<T>, TSocketError<T>, TSocketRequestPayload<T>>;

export const useMutation = <T extends TSocketEndpointNames>({
    name,
    ...options
}: AugmentedMutationOptions<T>): AugmentedMutationResult<T> => {
    const { send } = useAPI();

    return useReactQueryMutation({
        mutationFn: (payload) => send(name, payload),
        ...options,
    });
};
