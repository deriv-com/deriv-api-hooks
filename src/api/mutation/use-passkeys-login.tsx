import { useMutation } from '../../base';

export const usePasskeysLogin = () => {
    const { data, ...rest } = useMutation({ name: 'passkeys_login' });

    return {
        data: data?.passkeys_login,
        ...rest,
    };
};
