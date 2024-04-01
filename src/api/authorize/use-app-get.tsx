import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAppGet = ({ ...props }: Omit<TSocketQueryOptions<'app_get'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'app_get', ...props });

    return {
        data: data?.app_get,
        ...rest,
    };
};
