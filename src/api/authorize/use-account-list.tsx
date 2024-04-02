import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAccountList = ({ ...props }: Omit<TSocketQueryOptions<'account_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'account_list', ...props });

    return {
        data: data?.account_list,
        ...rest,
    };
};
