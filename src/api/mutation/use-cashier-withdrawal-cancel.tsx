import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useCashierWithdrawalCancel = ({
    ...props
}: Omit<AugmentedMutationOptions<'cashier_withdrawal_cancel'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'cashier_withdrawal_cancel', ...props });

    return {
        data: data?.cashier_withdrawal_cancel,
        ...rest,
    };
};
