import { useMutation } from '../../base';

export const useForgetAll = () => {
    const { data, ...rest } = useMutation({ name: 'forget_all' });

    return {
        data: data?.forget_all,
        ...rest,
    };
};
