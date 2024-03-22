import { useAuthorizeQuery } from '../../base';

export const usePasskeysList = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_list' });

    return {
        data: data?.passkeys_list,
        ...rest,
    };
};
