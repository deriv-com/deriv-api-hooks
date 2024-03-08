import { useMutation } from '../../base';

export const useSellContractForMultipleAccounts = () => {
    const { data, ...rest } = useMutation({ name: 'sell_contract_for_multiple_accounts' });

    return {
        data: data?.sell_contract_for_multiple_accounts,
        ...rest,
    };
};
