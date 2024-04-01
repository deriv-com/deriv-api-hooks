import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useCopyStart = ({ ...props }: Omit<AugmentedMutationOptions<'copy_start'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'copy_start', ...props });

    return {
        data: data?.copy_start,
        ...rest,
    };
};
