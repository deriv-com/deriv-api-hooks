import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useTradingServers = (): { data: TSocketResponseData<'trading_servers'>['trading_servers'] } & Omit<
    TSocketQueryResults<'trading_servers'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'trading_servers' });

    return {
        data: data?.trading_servers,
        ...rest,
    };
};
