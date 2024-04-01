import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useMt5Deposit = ({ ...props }: Omit<AugmentedMutationOptions<'mt5_deposit'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'mt5_deposit', ...props });

    return {
        data: data?.mt5_deposit,
        ...rest,
    };
};
