import { useAuthorizedSubscription } from '../../base';

export const useP2PAdvertiserInfo = () => {
    const { data, ...rest } = useAuthorizedSubscription('p2p_advertiser_info');
    return {
        data: data?.p2p_advertiser_info,
        ...rest,
    };
};
