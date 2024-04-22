import { useSubscribe } from '../../base';

export const useP2PAdvertiserInfo = () => {
    const { data, ...rest } = useSubscribe('p2p_advertiser_info');
    return {
        data: data?.p2p_advertiser_info,
        ...rest,
    };
};
