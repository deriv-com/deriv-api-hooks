import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetAccountStatus = ({ ...props }: Omit<TSocketQueryOptions<'get_account_status'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_account_status', ...props });

    return {
        data: data?.get_account_status,
        ...rest,
    };
};
