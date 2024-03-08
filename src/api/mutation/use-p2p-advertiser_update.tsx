import { useMutation } from '../../base';

export const useP2pAdvertiserUpdate = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_advertiser_update' });

    return {
        data: data?.p2p_advertiser_update,
        ...rest,
    };
};
