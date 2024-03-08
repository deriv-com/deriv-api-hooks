import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const usePasskeysList = (): { data: TSocketResponseData<'passkeys_list'>['passkeys_list'] } & Omit<
    TSocketQueryResults<'passkeys_list'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'passkeys_list' });

    return {
        data: data?.passkeys_list,
        ...rest,
    };
};
