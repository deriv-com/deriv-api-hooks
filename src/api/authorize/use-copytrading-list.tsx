import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useCopytradingList = ({ ...props }: Omit<TSocketQueryOptions<'copytrading_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'copytrading_list', ...props });

    return {
        data: data?.copytrading_list,
        ...rest,
    };
};
