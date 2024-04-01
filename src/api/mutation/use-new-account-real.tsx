import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNewAccountReal = ({ ...props }: Omit<AugmentedMutationOptions<'new_account_real'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'new_account_real', ...props });

    return {
        data: data?.new_account_real,
        ...rest,
    };
};
