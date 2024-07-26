import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useBuy = ({ ...props }: Omit<AugmentedMutationOptions<'buy'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'buy', ...props });

    return {
        data: data?.buy,
        ...rest,
    };
};
