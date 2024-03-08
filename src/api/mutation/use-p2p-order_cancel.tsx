import { useMutation } from '../../base';

export const useP2pOrderCancel = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_order_cancel' });

    return {
        data: data?.p2p_order_cancel,
        ...rest,
    };
};
