import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useGetAccountTypes = (): { data: TSocketResponseData<'get_account_types'>['get_account_types'] } & Omit<
    TSocketQueryResults<'get_account_types'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_account_types' });

    return {
        data: data?.get_account_types,
        ...rest,
    };
};
