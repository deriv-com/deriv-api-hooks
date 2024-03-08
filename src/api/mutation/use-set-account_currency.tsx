import { useMutation } from '../../base';

export const useSetAccountCurrency = () => {
    const { data, ...rest } = useMutation({ name: 'set_account_currency' });

    return {
        data: data?.set_account_currency,
        ...rest,
    };
};
