import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2POrderReview = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_order_review'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_review', ...props });

    return {
        data: data?.p2p_order_review,
        ...rest,
    };
};
