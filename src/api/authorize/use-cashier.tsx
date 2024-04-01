import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useCashier = ({ ...props }: Omit<TSocketQueryOptions<'cashier'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'cashier', ...props });

    return {
        data: data?.cashier,
        ...rest,
    };
};
