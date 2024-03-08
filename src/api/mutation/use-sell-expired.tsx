import { useMutation } from '../../base';

export const useSellExpired = () => {
    const { data, ...rest } = useMutation({ name: 'sell_expired' });

    return {
        data: data?.sell_expired,
        ...rest,
    };
};
