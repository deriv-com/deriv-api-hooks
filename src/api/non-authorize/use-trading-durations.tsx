import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingDurations = ({ ...props }: Omit<TSocketQueryOptions<'trading_durations'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'trading_durations', ...props });

    return {
        data: data?.trading_durations,
        ...rest,
    };
};
