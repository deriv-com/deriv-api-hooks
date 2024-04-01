import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useMt5GetSettings = ({ ...props }: Omit<TSocketQueryOptions<'mt5_get_settings'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'mt5_get_settings', ...props });

    return {
        data: data?.mt5_get_settings,
        ...rest,
    };
};
