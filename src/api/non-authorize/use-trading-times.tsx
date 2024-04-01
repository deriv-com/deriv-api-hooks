import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingTimes = ({ ...props }: Omit<TSocketQueryOptions<'trading_times'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'trading_times', ...props });

    return {
        data: data?.trading_times,
        ...rest,
    };
};
