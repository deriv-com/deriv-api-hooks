import { useMutation } from '../../base';

export const useAppRegister = () => {
    const { data, ...rest } = useMutation({ name: 'app_register' });

    return {
        data: data?.app_register,
        ...rest,
    };
};
