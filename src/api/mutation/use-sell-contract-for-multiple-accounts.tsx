import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSellContractForMultipleAccounts = ({
    ...props
}: Omit<AugmentedMutationOptions<'sell_contract_for_multiple_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'sell_contract_for_multiple_accounts', ...props });

    return {
        data: data?.sell_contract_for_multiple_accounts,
        ...rest,
    };
};
