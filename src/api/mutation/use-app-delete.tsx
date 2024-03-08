import { useMutation } from '../../base';

export const useAppDelete = () => {
    const { data, ...rest } = useMutation({ name: 'app_delete' });

    return {
        data: data?.app_delete,
        ...rest,
    };
};
