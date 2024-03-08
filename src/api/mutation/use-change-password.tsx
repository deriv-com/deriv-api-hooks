import { useMutation } from '../../base';

export const useChangePassword = () => {
    const { data, ...rest } = useMutation({ name: 'change_password' });

    return {
        data: data?.change_password,
        ...rest,
    };
};
