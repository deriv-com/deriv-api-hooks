import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAppDelete = ({ ...props }: Omit<AugmentedMutationOptions<'app_delete'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'app_delete', ...props });

    return {
        data: data?.app_delete,
        ...rest,
    };
};
