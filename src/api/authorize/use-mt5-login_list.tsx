import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useMt5LoginList = (): { data: TSocketResponseData<'mt5_login_list'>['mt5_login_list'] } & Omit<
    TSocketQueryResults<'mt5_login_list'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'mt5_login_list' });

    return {
        data: data?.mt5_login_list,
        ...rest,
    };
};
