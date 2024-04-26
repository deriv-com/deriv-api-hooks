import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2PAdvertiserCreate = ({
    ...props
}: Omit<AugmentedMutationOptions<'p2p_advertiser_create'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_advertiser_create', ...props });

    return {
        data: data?.p2p_advertiser_create,
        ...rest,
    };
};
