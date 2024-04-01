import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePasskeysRegisterOptions = ({
    ...props
}: Omit<TSocketQueryOptions<'passkeys_register_options'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_register_options', ...props });

    return {
        data: data?.passkeys_register_options,
        ...rest,
    };
};
