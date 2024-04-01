import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAccountStatistics = ({ ...props }: Omit<TSocketQueryOptions<'account_statistics'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'account_statistics', ...props });

    return {
        data: data?.account_statistics,
        ...rest,
    };
};
