import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingPlatformAccounts = ({ payload }: TSocketQueryOptions<'trading_platform_accounts'>) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_platform_accounts', payload });

    return {
        data: data?.trading_platform_accounts,
        ...rest,
    };
};
