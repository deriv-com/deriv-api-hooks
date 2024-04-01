import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useForgetAll = ({ ...props }: Omit<AugmentedMutationOptions<'forget_all'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'forget_all', ...props });

    return {
        data: data?.forget_all,
        ...rest,
    };
};
