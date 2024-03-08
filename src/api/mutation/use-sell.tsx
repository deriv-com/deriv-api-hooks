import { useMutation } from '../../base';

export const useSell = () => {
    const { data, ...rest } = useMutation({ name: 'sell' });

    return {
        data: data?.sell,
        ...rest,
    };
};
