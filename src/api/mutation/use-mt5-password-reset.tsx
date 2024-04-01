import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useMt5PasswordReset = ({
    ...props
}: Omit<AugmentedMutationOptions<'mt5_password_reset'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'mt5_password_reset', ...props });

    return {
        data: data?.mt5_password_reset,
        ...rest,
    };
};
