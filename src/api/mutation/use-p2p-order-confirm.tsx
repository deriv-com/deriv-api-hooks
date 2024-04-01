import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pOrderConfirm = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_order_confirm'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_confirm', ...props });

    return {
        data: data?.p2p_order_confirm,
        ...rest,
    };
};
