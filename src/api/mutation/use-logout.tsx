import { useMutation } from '../../base';

export const useLogout = () => {
    const { data, ...rest } = useMutation({ name: 'logout' });

    return {
        data: data?.logout,
        ...rest,
    };
};
