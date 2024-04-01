import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformAvailableAccounts = ({
    ...props
}: Omit<TSocketQueryOptions<'trading_platform_available_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_platform_available_accounts', ...props });

    return {
        data: data?.trading_platform_available_accounts,
        ...rest,
    };
};
