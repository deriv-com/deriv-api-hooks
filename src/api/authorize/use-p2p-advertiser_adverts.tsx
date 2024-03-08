import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useP2pAdvertiserAdverts = (): {
    data: TSocketResponseData<'p2p_advertiser_adverts'>['p2p_advertiser_adverts'];
} & Omit<TSocketQueryResults<'p2p_advertiser_adverts'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_adverts' });

    return {
        data: data?.p2p_advertiser_adverts,
        ...rest,
    };
};
