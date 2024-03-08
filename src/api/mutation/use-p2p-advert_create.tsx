import { useMutation } from '../../base';

export const useP2pAdvertCreate = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_advert_create' });

    return {
        data: data?.p2p_advert_create,
        ...rest,
    };
};
