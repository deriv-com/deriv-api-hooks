import { useMutation } from '../../base';

export const useTransferBetweenAccounts = () => {
    const { data, ...rest } = useMutation({ name: 'transfer_between_accounts' });

    return {
        data: data?.transfer_between_accounts,
        ...rest,
    };
};
