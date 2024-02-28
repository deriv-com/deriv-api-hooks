import { TSocketEndpointNames } from "../types/api.types";
import { useAuthData } from "./use-context-hooks";
import { TSocketQueryOptions, TSocketQueryResults, useQuery } from "./use-query";

export const useAuthorizeQuery = <T extends TSocketEndpointNames>({
    enabled,
    ...rest
}: TSocketQueryOptions<T>): TSocketQueryResults<T> => {
    const { isAuthorized } = useAuthData();

    return useQuery<T>({
        enabled: enabled && isAuthorized,
        ...rest,
    });
};
