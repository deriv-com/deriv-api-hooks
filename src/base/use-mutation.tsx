import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from '../types/api.types';
import { useAPI, useAuthData } from './use-context-hooks';
import { UseMutationOptions, UseMutationResult, useMutation as useReactQueryMutation } from '@tanstack/react-query';

export type AugmentedMutationResult<T extends TSocketEndpointNames> = UseMutationResult<
    TSocketResponseData<T>,
    TSocketError<T>,
    TSocketRequestPayload<T>
>;

export type AugmentedMutationOptions<T extends TSocketEndpointNames> = {
    name: T;
    bypassAuth?: boolean;
} & Omit<UseMutationOptions<TSocketResponseData<T>, TSocketError<T>, TSocketRequestPayload<T>>, 'mutationFn'>;

export const useMutation = <T extends TSocketEndpointNames>({
    name,
    bypassAuth = false,
    ...options
}: AugmentedMutationOptions<T>) => {
    const { isAuthorized } = useAuthData();
    const { send } = useAPI();

    const { mutate, mutateAsync, ...props } = useReactQueryMutation({
        mutationFn: payload => send(name, payload),
        ...options,
    });

    return {
        mutate: (payload: TSocketRequestPayload<T>) => {
            if (!bypassAuth && !isAuthorized) return;
            return mutate(payload);
        },
        mutateAsync: (payload: TSocketRequestPayload<T>) => {
            if (!bypassAuth && !isAuthorized) return;
            return mutateAsync(payload);
        },
        ...props,
    };
};
