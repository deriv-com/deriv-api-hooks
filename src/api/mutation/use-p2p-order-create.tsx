import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2POrderCreate = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_order_create'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_create', ...props });

    return {
        data: data?.p2p_order_create,
        ...rest,
    };
};
