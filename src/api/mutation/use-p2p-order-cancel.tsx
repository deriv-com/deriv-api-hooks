import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pOrderCancel = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_order_cancel'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_cancel', ...props });

    return {
        data: data?.p2p_order_cancel,
        ...rest,
    };
};
