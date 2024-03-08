import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useP2pAdvertiserPaymentMethods = (): {
    data: TSocketResponseData<'p2p_advertiser_payment_methods'>['p2p_advertiser_payment_methods'];
} & Omit<TSocketQueryResults<'p2p_advertiser_payment_methods'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_payment_methods' });

    return {
        data: data?.p2p_advertiser_payment_methods,
        ...rest,
    };
};
