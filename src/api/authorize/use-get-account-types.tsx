import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetAccountTypes = ({ ...props }: Omit<TSocketQueryOptions<'get_account_types'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_account_types', ...props });

    return {
        data: data?.get_account_types,
        ...rest,
    };
};
