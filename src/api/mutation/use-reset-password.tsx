import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useResetPassword = ({ ...props }: Omit<AugmentedMutationOptions<'reset_password'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'reset_password', ...props });

    return {
        data: data?.reset_password,
        ...rest,
    };
};
