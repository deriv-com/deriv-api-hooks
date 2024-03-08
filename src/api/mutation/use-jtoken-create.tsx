import { useMutation } from '../../base';

export const useJtokenCreate = () => {
    const { data, ...rest } = useMutation({ name: 'jtoken_create' });

    return {
        data: data?.jtoken_create,
        ...rest,
    };
};
