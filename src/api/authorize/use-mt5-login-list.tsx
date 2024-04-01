import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useMt5LoginList = ({ ...props }: Omit<TSocketQueryOptions<'mt5_login_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'mt5_login_list', ...props });

    return {
        data: data?.mt5_login_list,
        ...rest,
    };
};
