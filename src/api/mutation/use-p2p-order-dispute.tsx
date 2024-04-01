import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pOrderDispute = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_order_dispute'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_dispute', ...props });

    return {
        data: data?.p2p_order_dispute,
        ...rest,
    };
};
