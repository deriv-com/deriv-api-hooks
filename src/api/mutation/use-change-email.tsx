import { useMutation } from '../../base';

export const useChangeEmail = () => {
    const { data, ...rest } = useMutation({ name: 'change_email' });

    return {
        data: data?.change_email,
        ...rest,
    };
};
