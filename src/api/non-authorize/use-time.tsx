import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTime = ({ payload }: TSocketQueryOptions<'time'>) => {
    const { data, ...rest } = useQuery({ name: 'time', payload });

    return {
        data: data?.time,
        ...rest,
    };
};
