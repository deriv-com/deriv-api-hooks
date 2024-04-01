import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAccountSecurity = ({ ...props }: Omit<AugmentedMutationOptions<'account_security'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'account_security', ...props });

    return {
        data: data?.account_security,
        ...rest,
    };
};
