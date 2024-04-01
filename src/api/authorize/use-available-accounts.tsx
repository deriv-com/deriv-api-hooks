import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAvailableAccounts = ({ ...props }: Omit<TSocketQueryOptions<'available_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'available_accounts', ...props });

    return {
        data: data?.available_accounts,
        ...rest,
    };
};
