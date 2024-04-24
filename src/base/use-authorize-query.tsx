import { TSocketEndpointNames } from '../types/api.types';
import { useAuthData } from './use-context-hooks';
import { TSocketQueryOptions, useQuery } from './use-query';

export const useAuthorizeQuery = <T extends TSocketEndpointNames>({
    name,
    enabled = true,
    ...rest
}: TSocketQueryOptions<T>) => {
    const { isAuthorized } = useAuthData();

    console.log(enabled, isAuthorized);

    return useQuery<T>({
        name,
        enabled: enabled && isAuthorized,
        ...rest,
    });
};
