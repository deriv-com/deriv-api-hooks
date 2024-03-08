import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useCopytradingList = (): { data: TSocketResponseData<'copytrading_list'>['copytrading_list'] } & Omit<
    TSocketQueryResults<'copytrading_list'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'copytrading_list' });

    return {
        data: data?.copytrading_list,
        ...rest,
    };
};
