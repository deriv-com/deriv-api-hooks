import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useMt5Withdrawal = ({ ...props }: Omit<AugmentedMutationOptions<'mt5_withdrawal'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'mt5_withdrawal', ...props });

    return {
        data: data?.mt5_withdrawal,
        ...rest,
    };
};
