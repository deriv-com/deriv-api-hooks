import { UseInfiniteQueryOptions, useInfiniteQuery as _useInfiniteQuery } from '@tanstack/react-query';
import {
    TSocketPaginateableEndpointNames,
    TSocketError,
    TSocketRequestPayload,
    TSocketResponseData,
} from '../types/api.types';
import { useAPI, useAuthData } from './use-context-hooks';

export type TPaginatedQueryOptions<T extends TSocketPaginateableEndpointNames> = {
    name: T;
    payload?: TSocketRequestPayload<T>;
    queryKey?: unknown[];
} & Partial<Omit<UseInfiniteQueryOptions<TSocketResponseData<T>, TSocketError<T>>, 'queryKey' | 'queryFn' | 'select'>>;

export const useInfiniteQuery = <T extends TSocketPaginateableEndpointNames>({
    name,
    payload,
    queryKey,
    ...options
}: TPaginatedQueryOptions<T>) => {
    const { isAuthorized } = useAuthData();
    const { derivAPIClient } = useAPI();
    const initialOffset = payload?.offset || 0;
    const limit = payload?.limit || 50;
    return _useInfiniteQuery<TSocketResponseData<T>, TSocketError<T>>({
        queryKey: [name, ...(queryKey ?? [])],
        queryFn: ({ pageParam = 0 }) =>
            derivAPIClient.send(name, {
                ...payload,
                limit,
                offset: Number(pageParam) * limit + initialOffset,
            } as TSocketRequestPayload<T>),
        ...options,
        initialPageParam: options?.initialPageParam ? options.initialPageParam : 0,
        getNextPageParam: options?.getNextPageParam ? options.getNextPageParam : (_lastPage, pages) => pages.length,
        enabled: isAuthorized && (options?.enabled === undefined || options.enabled),
    });
};
