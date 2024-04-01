import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useCancel = ({ ...props }: Omit<AugmentedMutationOptions<'cancel'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'cancel', ...props });

    return {
        data: data?.cancel,
        ...rest,
    };
};
