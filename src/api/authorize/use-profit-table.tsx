import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useProfitTable = (): { data: TSocketResponseData<'profit_table'>['profit_table'] } & Omit<
    TSocketQueryResults<'profit_table'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'profit_table' });

    return {
        data: data?.profit_table,
        ...rest,
    };
};
