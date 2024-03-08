import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useAvailableAccounts = (): {
    data: TSocketResponseData<'available_accounts'>['available_accounts'];
} & Omit<TSocketQueryResults<'available_accounts'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'available_accounts' });

    return {
        data: data?.available_accounts,
        ...rest,
    };
};
