import { useMutation } from '../../base';

export const useMt5PasswordReset = () => {
    const { data, ...rest } = useMutation({ name: 'mt5_password_reset' });

    return {
        data: data?.mt5_password_reset,
        ...rest,
    };
};
