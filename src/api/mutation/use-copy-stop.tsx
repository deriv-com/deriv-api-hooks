import { useMutation } from '../../base';

export const useCopyStop = () => {
    const { data, ...rest } = useMutation({ name: 'copy_stop' });

    return {
        data: data?.copy_stop,
        ...rest,
    };
};
