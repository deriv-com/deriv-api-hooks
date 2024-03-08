import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useMt5GetSettings = (): { data: TSocketResponseData<'mt5_get_settings'>['mt5_get_settings'] } & Omit<
    TSocketQueryResults<'mt5_get_settings'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'mt5_get_settings' });

    return {
        data: data?.mt5_get_settings,
        ...rest,
    };
};
