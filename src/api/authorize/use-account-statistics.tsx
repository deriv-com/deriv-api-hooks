import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useAccountStatistics = (): {
    data: TSocketResponseData<'account_statistics'>['account_statistics'];
} & Omit<TSocketQueryResults<'account_statistics'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'account_statistics' });

    return {
        data: data?.account_statistics,
        ...rest,
    };
};
