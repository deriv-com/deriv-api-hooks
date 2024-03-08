import { useMutation } from '../../base';

export const usePasskeysRegister = () => {
    const { data, ...rest } = useMutation({ name: 'passkeys_register' });

    return {
        data: data?.passkeys_register,
        ...rest,
    };
};
