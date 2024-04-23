import { useSubscribe } from '../../base';

export const useP2POrderInfo = () => {
    const { data, ...rest } = useSubscribe('p2p_order_info');
    return {
        data: data?.p2p_order_info,
        ...rest,
    };
};
