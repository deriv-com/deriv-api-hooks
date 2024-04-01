import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useStatesList = ({ ...props }: Omit<TSocketQueryOptions<'states_list'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'states_list', ...props });

    return {
        data: data?.states_list,
        ...rest,
    };
};
