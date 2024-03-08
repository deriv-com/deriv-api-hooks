import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformLeverage = ({ payload }: TSocketQueryOptions<'trading_platform_leverage'>) => {
    const { data, ...rest } = useQuery({ name: 'trading_platform_leverage', payload });

    return {
        data: data?.trading_platform_leverage,
        ...rest,
    };
};
