import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingTimes = ({ payload }: TSocketQueryOptions<'trading_times'>) => {
    const { data, ...rest } = useQuery({ name: 'trading_times', payload });

    return {
        data: data?.trading_times,
        ...rest,
    };
};
