import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2PAdvertiserPaymentMethodsMutation = ({
    ...props
}: Omit<AugmentedMutationOptions<'p2p_advertiser_payment_methods'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_advertiser_payment_methods', ...props });

    return {
        data: data?.p2p_advertiser_payment_methods,
        ...rest,
    };
};
