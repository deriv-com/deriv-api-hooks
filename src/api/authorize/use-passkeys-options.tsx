import { useAuthorizeQuery } from '../../base';

export const usePasskeysOptions = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_options' });

    return {
        data: data?.passkeys_options,
        ...rest,
    };
};
