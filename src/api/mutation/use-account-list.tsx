import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAccountList = ({ ...props }: Omit<AugmentedMutationOptions<'account_list'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'account_list', ...props });

    return {
        data: data?.account_list,
        ...rest,
    };
};
