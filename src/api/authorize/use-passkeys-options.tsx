import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePasskeysOptions = ({ ...props }: Omit<TSocketQueryOptions<'passkeys_options'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_options', ...props });

    return {
        data: data?.passkeys_options,
        ...rest,
    };
};
