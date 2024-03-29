import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformAvailableAccounts = ({
    payload,
}: TSocketQueryOptions<'trading_platform_available_accounts'>) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_platform_available_accounts', payload });

    return {
        data: data?.trading_platform_available_accounts,
        ...rest,
    };
};
