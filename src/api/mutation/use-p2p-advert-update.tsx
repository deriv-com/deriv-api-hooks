import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pAdvertUpdate = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_advert_update'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_advert_update', ...props });

    return {
        data: data?.p2p_advert_update,
        ...rest,
    };
};
