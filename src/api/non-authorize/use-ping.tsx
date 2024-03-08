import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePing = ({ payload }: TSocketQueryOptions<'ping'>) => {
    const { data, ...rest } = useQuery({ name: 'ping', payload });

    return {
        data: data?.ping,
        ...rest,
    };
};
