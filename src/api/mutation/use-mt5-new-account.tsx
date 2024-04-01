import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useMT5NewAccount = ({ ...props }: Omit<AugmentedMutationOptions<'mt5_new_account'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'mt5_new_account', ...props });

    return {
        data: data?.mt5_new_account,
        ...rest,
    };
};
