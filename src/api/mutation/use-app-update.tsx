import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAppUpdate = ({ ...props }: Omit<AugmentedMutationOptions<'app_update'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'app_update', ...props });

    return {
        data: data?.app_update,
        ...rest,
    };
};
