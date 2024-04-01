import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useCopytradingStatistics = ({
    ...props
}: Omit<TSocketQueryOptions<'copytrading_statistics'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'copytrading_statistics', ...props });

    return {
        data: data?.copytrading_statistics,
        ...rest,
    };
};
