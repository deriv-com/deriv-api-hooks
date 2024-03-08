import { useMutation } from '../../base';

export const useCashierWithdrawalCancel = () => {
    const { data, ...rest } = useMutation({ name: 'cashier_withdrawal_cancel' });

    return {
        data: data?.cashier_withdrawal_cancel,
        ...rest,
    };
};
