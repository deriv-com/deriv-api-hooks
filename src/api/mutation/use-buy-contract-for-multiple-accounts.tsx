import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useBuyContractForMultipleAccounts = ({
    ...props
}: Omit<AugmentedMutationOptions<'buy_contract_for_multiple_accounts'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'buy_contract_for_multiple_accounts', ...props });

    return {
        data: data?.buy_contract_for_multiple_accounts,
        ...rest,
    };
};
