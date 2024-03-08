import { useMutation } from '../../base';

export const useForget = () => {
    const { data, ...rest } = useMutation({ name: 'forget' });

    return {
        data: data?.forget,
        ...rest,
    };
};
