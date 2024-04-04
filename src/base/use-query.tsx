import { useQuery as _useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';
import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from '../types/api.types';
import { useAPI } from './use-context-hooks';

export type TSocketQueryOptions<T extends TSocketEndpointNames> = {
    name: T;
    payload?: TSocketRequestPayload<T>;
    queryKey?: string[];
} & Omit<UseQueryOptions<TSocketResponseData<T>, TSocketError<T>>, 'queryKey' | 'queryFn'>;

export type TSocketQueryResults<T extends TSocketEndpointNames> = UseQueryResult<
    TSocketResponseData<T>,
    TSocketError<T>
>;

export const useQuery = <T extends TSocketEndpointNames>({
    name,
    payload,
    queryKey,
    ...rest
}: TSocketQueryOptions<T>) => {
    const { send } = useAPI();

    return _useQuery<TSocketResponseData<T>, TSocketError<T>>({
        queryKey: [name, ...(queryKey ?? [])],
        queryFn: () => send(name, payload),
        ...rest,
    });
};
