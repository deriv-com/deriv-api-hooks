import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useActiveSymbols = ({ payload }: TSocketQueryOptions<'active_symbols'>) => {
    const { data, ...rest } = useQuery({ name: 'active_symbols', payload });

    return {
        data: data?.active_symbols,
        ...rest,
    };
};
