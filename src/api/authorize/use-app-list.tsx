import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAppList = ({ ...props }: Omit<TSocketQueryOptions<'app_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'app_list', ...props });

    return {
        data: data?.app_list,
        ...rest,
    };
};
