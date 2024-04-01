import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNewAccountVirtual = ({
    ...props
}: Omit<AugmentedMutationOptions<'new_account_virtual'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'new_account_virtual', ...props });

    return {
        data: data?.new_account_virtual,
        ...rest,
    };
};
