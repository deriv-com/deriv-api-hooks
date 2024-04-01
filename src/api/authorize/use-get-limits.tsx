import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetLimits = ({ ...props }: Omit<TSocketQueryOptions<'get_limits'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_limits', ...props });

    return {
        data: data?.get_limits,
        ...rest,
    };
};
