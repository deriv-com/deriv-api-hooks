import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePayoutCurrencies = ({ ...props }: Omit<TSocketQueryOptions<'payout_currencies'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'payout_currencies', ...props });

    return {
        data: data?.payout_currencies,
        ...rest,
    };
};
