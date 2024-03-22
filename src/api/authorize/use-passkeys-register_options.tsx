import { useAuthorizeQuery } from '../../base';

export const usePasskeysRegisterOptions = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_register_options' });

    return {
        data: data?.passkeys_register_options,
        ...rest,
    };
};
