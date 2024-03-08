import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAccountList = ({ payload }: TSocketQueryOptions<'account_list'>) => {
    const { data, ...rest } = useQuery({ name: 'account_list', payload });

    return {
        data: data?.account_list,
        ...rest,
    };
};
