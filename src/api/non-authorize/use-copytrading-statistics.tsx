import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useCopytradingStatistics = ({ payload }: TSocketQueryOptions<'copytrading_statistics'>) => {
    const { data, ...rest } = useQuery({ name: 'copytrading_statistics', payload });

    return {
        data: data?.copytrading_statistics,
        ...rest,
    };
};
