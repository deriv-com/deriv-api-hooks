import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSellExpired = ({ ...props }: Omit<AugmentedMutationOptions<'sell_expired'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'sell_expired', ...props });

    return {
        data: data?.sell_expired,
        ...rest,
    };
};
