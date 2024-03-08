import { useMutation } from '../../base';

export const useCopyStart = () => {
    const { data, ...rest } = useMutation({ name: 'copy_start' });

    return {
        data: data?.copy_start,
        ...rest,
    };
};
