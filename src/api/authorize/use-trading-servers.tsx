import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTradingServers = ({ ...props }: Omit<TSocketQueryOptions<'trading_servers'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_servers', ...props });

    return {
        data: data?.trading_servers,
        ...rest,
    };
};
