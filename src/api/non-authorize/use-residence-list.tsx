import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useResidenceList = ({ ...props }: Omit<TSocketQueryOptions<'residence_list'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'residence_list', ...props });

    return {
        data: data?.residence_list,
        ...rest,
    };
};
