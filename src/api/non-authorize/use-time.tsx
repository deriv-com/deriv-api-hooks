import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useTime = ({ ...props }: Omit<TSocketQueryOptions<'time'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'time', ...props });

    return {
        data: data?.time,
        ...rest,
    };
};
