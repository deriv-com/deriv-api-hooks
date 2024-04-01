import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePasskeysList = ({ ...props }: Omit<TSocketQueryOptions<'passkeys_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_list', ...props });

    return {
        data: data?.passkeys_list,
        ...rest,
    };
};
