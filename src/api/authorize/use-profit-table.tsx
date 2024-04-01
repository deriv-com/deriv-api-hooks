import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useProfitTable = ({ ...props }: Omit<TSocketQueryOptions<'profit_table'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'profit_table', ...props });

    return {
        data: data?.profit_table,
        ...rest,
    };
};
