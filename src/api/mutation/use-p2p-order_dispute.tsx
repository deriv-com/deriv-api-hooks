import { useMutation } from '../../base';

export const useP2pOrderDispute = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_dispute' });

    return {
        data: data?.p2p_order_dispute,
        ...rest,
    };
};
