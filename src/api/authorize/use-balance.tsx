import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useBalance = ({ ...props }: Omit<TSocketQueryOptions<'balance'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'balance', ...props });

    return {
        data: data?.balance,
        ...rest,
    };
};
