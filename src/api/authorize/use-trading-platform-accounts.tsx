import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformAccounts = ({
    ...props
}: Omit<TSocketQueryOptions<'trading_platform_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_platform_accounts', ...props });

    return {
        data: data?.trading_platform_accounts,
        ...rest,
    };
};
