import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useStatesList = ({ payload }: TSocketQueryOptions<'states_list'>) => {
    const { data, ...rest } = useQuery({ name: 'states_list', payload });

    return {
        data: data?.states_list,
        ...rest,
    };
};
