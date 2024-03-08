import { useMutation } from '../../base';

export const useMt5PasswordChange = () => {
    const { data, ...rest } = useMutation({ name: 'mt5_password_change' });

    return {
        data: data?.mt5_password_change,
        ...rest,
    };
};
