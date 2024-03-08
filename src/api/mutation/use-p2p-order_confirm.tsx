import { useMutation } from '../../base';

export const useP2pOrderConfirm = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_confirm' });

    return {
        data: data?.p2p_order_confirm,
        ...rest,
    };
};
