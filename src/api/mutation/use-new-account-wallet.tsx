import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNewAccountWallet = ({
    ...props
}: Omit<AugmentedMutationOptions<'new_account_wallet'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'new_account_wallet', ...props });

    return {
        data: data?.new_account_wallet,
        ...rest,
    };
};
