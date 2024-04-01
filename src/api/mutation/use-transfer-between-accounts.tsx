import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTransferBetweenAccounts = ({
    ...props
}: Omit<AugmentedMutationOptions<'transfer_between_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'transfer_between_accounts', ...props });

    return {
        data: data?.transfer_between_accounts,
        ...rest,
    };
};
