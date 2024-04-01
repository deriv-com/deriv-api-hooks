import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformLeverage = ({
    ...props
}: Omit<TSocketQueryOptions<'trading_platform_leverage'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'trading_platform_leverage', ...props });

    return {
        data: data?.trading_platform_leverage,
        ...rest,
    };
};
