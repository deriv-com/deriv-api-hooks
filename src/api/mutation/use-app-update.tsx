import { useMutation } from '../../base';

export const useAppUpdate = () => {
    const { data, ...rest } = useMutation({ name: 'app_update' });

    return {
        data: data?.app_update,
        ...rest,
    };
};
