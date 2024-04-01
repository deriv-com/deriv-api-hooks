import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePasskeysLogin = ({ ...props }: Omit<AugmentedMutationOptions<'passkeys_login'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'passkeys_login', ...props });

    return {
        data: data?.passkeys_login,
        ...rest,
    };
};
