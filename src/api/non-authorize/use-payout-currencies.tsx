import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePayoutCurrencies = ({ payload }: TSocketQueryOptions<'payout_currencies'>) => {
    const { data, ...rest } = useQuery({ name: 'payout_currencies', payload });

    return {
        data: data?.payout_currencies,
        ...rest,
    };
};
