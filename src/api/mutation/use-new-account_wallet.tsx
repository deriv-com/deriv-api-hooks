import { useMutation } from '../../base';

export const useNewAccountWallet = () => {
    const { data, ...rest } = useMutation({ name: 'new_account_wallet' });

    return {
        data: data?.new_account_wallet,
        ...rest,
    };
};
