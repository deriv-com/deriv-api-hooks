import { useMutation } from '../../base';

export const usePasskeysRevoke = () => {
    const { data, ...rest } = useMutation({ name: 'passkeys_revoke' });

    return {
        data: data?.passkeys_revoke,
        ...rest,
    };
};
