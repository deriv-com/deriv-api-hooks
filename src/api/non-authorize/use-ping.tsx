import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePing = ({ ...props }: Omit<TSocketQueryOptions<'ping'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'ping', ...props });

    return {
        data: data?.ping,
        ...rest,
    };
};
