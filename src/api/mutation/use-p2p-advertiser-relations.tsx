import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2PAdvertiserRelations = ({
    ...props
}: Omit<AugmentedMutationOptions<'p2p_advertiser_relations'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_advertiser_relations', ...props });

    return {
        data: data?.p2p_advertiser_relations,
        ...rest,
    };
};
