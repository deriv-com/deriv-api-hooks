import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAccountClosure = ({ ...props }: Omit<AugmentedMutationOptions<'account_closure'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'account_closure', ...props });

    return {
        data: data?.account_closure,
        ...rest,
    };
};
