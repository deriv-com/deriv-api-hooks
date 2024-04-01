import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePasskeysRevoke = ({ ...props }: Omit<AugmentedMutationOptions<'passkeys_revoke'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'passkeys_revoke', ...props });

    return {
        data: data?.passkeys_revoke,
        ...rest,
    };
};
