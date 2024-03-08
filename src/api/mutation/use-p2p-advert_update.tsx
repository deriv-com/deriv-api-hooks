import { useMutation } from '../../base';

export const useP2pAdvertUpdate = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_advert_update' });

    return {
        data: data?.p2p_advert_update,
        ...rest,
    };
};
