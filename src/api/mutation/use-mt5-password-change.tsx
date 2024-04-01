import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useMt5PasswordChange = ({
    ...props
}: Omit<AugmentedMutationOptions<'mt5_password_change'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'mt5_password_change', ...props });

    return {
        data: data?.mt5_password_change,
        ...rest,
    };
};
