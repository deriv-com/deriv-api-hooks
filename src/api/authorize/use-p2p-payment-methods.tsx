import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pPaymentMethods = ({ ...props }: Omit<TSocketQueryOptions<'p2p_payment_methods'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_payment_methods', ...props });

    return {
        data: data?.p2p_payment_methods,
        ...rest,
    };
};
