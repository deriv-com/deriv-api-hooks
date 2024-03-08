import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingDurations = ({ payload }: TSocketQueryOptions<'trading_durations'>) => {
    const { data, ...rest } = useQuery({ name: 'trading_durations', payload });

    return {
        data: data?.trading_durations,
        ...rest,
    };
};
