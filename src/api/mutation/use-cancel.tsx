import { useMutation } from '../../base';

export const useCancel = () => {
    const { data, ...rest } = useMutation({ name: 'cancel' });

    return {
        data: data?.cancel,
        ...rest,
    };
};
