import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useLoginHistory = ({ ...props }: Omit<TSocketQueryOptions<'login_history'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'login_history', ...props });

    return {
        data: data?.login_history,
        ...rest,
    };
};
