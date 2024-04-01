import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pAdvertiserPaymentMethods = ({
    ...props
}: Omit<TSocketQueryOptions<'p2p_advertiser_payment_methods'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_payment_methods', ...props });

    return {
        data: data?.p2p_advertiser_payment_methods,
        ...rest,
    };
};
