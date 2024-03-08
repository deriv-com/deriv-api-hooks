import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformProductListing = ({
    payload,
}: TSocketQueryOptions<'trading_platform_product_listing'>) => {
    const { data, ...rest } = useQuery({ name: 'trading_platform_product_listing', payload });

    return {
        data: data?.trading_platform_product_listing,
        ...rest,
    };
};
