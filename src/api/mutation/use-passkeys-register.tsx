import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePasskeysRegister = ({ ...props }: Omit<AugmentedMutationOptions<'passkeys_register'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'passkeys_register', ...props });

    return {
        data: data?.passkeys_register,
        ...rest,
    };
};
