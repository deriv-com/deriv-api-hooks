import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useGetSettings = (): {
    data: TSocketResponseData<'get_settings'>['get_settings'];
} & Omit<TSocketQueryResults<'get_settings'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_settings' });

    return {
        data: data?.get_settings,
        ...rest,
    };
};
