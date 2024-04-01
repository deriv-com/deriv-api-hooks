import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useServiceToken = ({ ...props }: Omit<TSocketQueryOptions<'service_token'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'service_token', ...props });

    return {
        data: data?.service_token,
        ...rest,
    };
};
