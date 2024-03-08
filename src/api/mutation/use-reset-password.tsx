import { useMutation } from '../../base';

export const useResetPassword = () => {
    const { data, ...rest } = useMutation({ name: 'reset_password' });

    return {
        data: data?.reset_password,
        ...rest,
    };
};
