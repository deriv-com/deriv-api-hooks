import { useMutation } from '../../base';

export const useSetSettings = () => {
    const { data, ...rest } = useMutation({ name: 'set_settings' });

    return {
        data: data?.set_settings,
        ...rest,
    };
};
