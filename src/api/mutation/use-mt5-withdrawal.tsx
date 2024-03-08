import { useMutation } from '../../base';

export const useMt5Withdrawal = () => {
    const { data, ...rest } = useMutation({ name: 'mt5_withdrawal' });

    return {
        data: data?.mt5_withdrawal,
        ...rest,
    };
};
