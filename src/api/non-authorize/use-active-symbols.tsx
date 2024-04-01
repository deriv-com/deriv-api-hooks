import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useActiveSymbols = ({ ...props }: Omit<TSocketQueryOptions<'active_symbols'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'active_symbols', ...props });

    return {
        data: data?.active_symbols,
        ...rest,
    };
};
