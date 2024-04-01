import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSetAccountCurrency = ({
    ...props
}: Omit<AugmentedMutationOptions<'set_account_currency'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'set_account_currency', ...props });

    return {
        data: data?.set_account_currency,
        ...rest,
    };
};
