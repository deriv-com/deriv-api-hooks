import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetSettings = ({ ...props }: Omit<TSocketQueryOptions<'get_settings'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_settings', ...props });

    return {
        data: data?.get_settings,
        ...rest,
    };
};
