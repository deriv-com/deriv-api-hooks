import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformProductListing = ({
    ...props
}: Omit<TSocketQueryOptions<'trading_platform_product_listing'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'trading_platform_product_listing', ...props });

    return {
        data: data?.trading_platform_product_listing,
        ...rest,
    };
};
