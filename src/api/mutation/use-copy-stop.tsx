import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useCopyStop = ({ ...props }: Omit<AugmentedMutationOptions<'copy_stop'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'copy_stop', ...props });

    return {
        data: data?.copy_stop,
        ...rest,
    };
};
