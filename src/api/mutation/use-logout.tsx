import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useLogout = ({ ...props }: Omit<AugmentedMutationOptions<'logout'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'logout', ...props });

    return {
        data: data?.logout,
        ...rest,
    };
};
