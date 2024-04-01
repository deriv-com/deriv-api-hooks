import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSell = ({ ...props }: Omit<AugmentedMutationOptions<'sell'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'sell', ...props });

    return {
        data: data?.sell,
        ...rest,
    };
};
