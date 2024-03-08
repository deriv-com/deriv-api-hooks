import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useP2pPing = (): { data: TSocketResponseData<'p2p_ping'>['p2p_ping'] } & Omit<
    TSocketQueryResults<'p2p_ping'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_ping' });

    return {
        data: data?.p2p_ping,
        ...rest,
    };
};
