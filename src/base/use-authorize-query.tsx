import { TSocketEndpointNames } from '../types/api.types';
import { useAuthData } from './use-context-hooks';
import { TSocketQueryOptions, useQuery } from './use-query';

export const useAuthorizeQuery = <T extends TSocketEndpointNames>({
    name,
    enabled,
    ...rest
}: TSocketQueryOptions<T>) => {
    const { isAuthorized } = useAuthData();

    return useQuery<T>({
        name,
        enabled: enabled && isAuthorized,
        ...rest,
    });
};
