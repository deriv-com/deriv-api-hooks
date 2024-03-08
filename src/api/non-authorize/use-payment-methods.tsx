import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePaymentMethods = ({ payload }: TSocketQueryOptions<'payment_methods'>) => {
    const { data, ...rest } = useQuery({ name: 'payment_methods', payload });

    return {
        data: data?.payment_methods,
        ...rest,
    };
};
