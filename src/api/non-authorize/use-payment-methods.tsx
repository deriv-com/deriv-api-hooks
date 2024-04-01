import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePaymentMethods = ({ ...props }: Omit<TSocketQueryOptions<'payment_methods'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'payment_methods', ...props });

    return {
        data: data?.payment_methods,
        ...rest,
    };
};
