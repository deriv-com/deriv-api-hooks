import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetSelfExclusion = ({ ...props }: Omit<TSocketQueryOptions<'get_self_exclusion'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_self_exclusion', ...props });

    return {
        data: data?.get_self_exclusion,
        ...rest,
    };
};
