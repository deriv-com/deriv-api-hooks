import { useQuery as _useQuery, UseQueryResult, UseQueryOptions } from "@tanstack/react-query";
import { TSocketEndpointNames, TSocketError, TSocketRequestPayload, TSocketResponseData } from "../types/api.types";
import { useAPI } from "./use-api";

type TSocketRequestQuery<T extends TSocketEndpointNames> = {
    name: T;
    payload?: TSocketRequestPayload<T>;
} & UseQueryOptions<TSocketResponseData<T>, TSocketError<T>>;

export const useQuery = <T extends TSocketEndpointNames>({
    name,
    payload,
    queryKey,
    ...rest
}: TSocketRequestQuery<T>): UseQueryResult<TSocketResponseData<T>, TSocketError<T>> => {
    const { derivAPI } = useAPI();

    const send = (name: T, payload?: TSocketRequestPayload<T>) => {
        return derivAPI.current?.send({ [name]: 1, ...payload });
    };

    return _useQuery<TSocketResponseData<T>, TSocketError<T>>({
        queryKey: [name, ...(queryKey ?? [])],
        queryFn: () => send(name, payload),
        ...rest,
    });
};
