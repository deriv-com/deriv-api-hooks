import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useChangePassword = ({ ...props }: Omit<AugmentedMutationOptions<'change_password'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'change_password', ...props });

    return {
        data: data?.change_password,
        ...rest,
    };
};
