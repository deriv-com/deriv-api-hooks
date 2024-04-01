import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNewAccountMaltainvest = ({
    ...props
}: Omit<AugmentedMutationOptions<'new_account_maltainvest'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'new_account_maltainvest', ...props });

    return {
        data: data?.new_account_maltainvest,
        ...rest,
    };
};
