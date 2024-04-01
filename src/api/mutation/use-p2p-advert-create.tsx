import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pAdvertCreate = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_advert_create'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_advert_create', ...props });

    return {
        data: data?.p2p_advert_create,
        ...rest,
    };
};
