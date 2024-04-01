import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePasskeysRename = ({ ...props }: Omit<AugmentedMutationOptions<'passkeys_rename'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'passkeys_rename', ...props });

    return {
        data: data?.passkeys_rename,
        ...rest,
    };
};
