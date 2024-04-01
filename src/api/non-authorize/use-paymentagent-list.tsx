import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePaymentagentList = ({ ...props }: Omit<TSocketQueryOptions<'paymentagent_list'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'paymentagent_list', ...props });

    return {
        data: data?.paymentagent_list,
        ...rest,
    };
};
