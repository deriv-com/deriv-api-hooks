import { useMutation } from '../../base';

export const usePasskeysRename = () => {
    const { data, ...rest } = useMutation({ name: 'passkeys_rename' });

    return {
        data: data?.passkeys_rename,
        ...rest,
    };
};
