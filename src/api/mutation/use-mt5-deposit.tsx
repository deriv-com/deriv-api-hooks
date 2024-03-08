import { useMutation } from '../../base';

export const useMt5Deposit = () => {
    const { data, ...rest } = useMutation({ name: 'mt5_deposit' });

    return {
        data: data?.mt5_deposit,
        ...rest,
    };
};
