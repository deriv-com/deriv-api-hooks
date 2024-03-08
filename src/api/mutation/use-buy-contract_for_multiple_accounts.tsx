import { useMutation } from '../../base';

export const useBuyContractForMultipleAccounts = () => {
    const { data, ...rest } = useMutation({ name: 'buy_contract_for_multiple_accounts' });

    return {
        data: data?.buy_contract_for_multiple_accounts,
        ...rest,
    };
};
