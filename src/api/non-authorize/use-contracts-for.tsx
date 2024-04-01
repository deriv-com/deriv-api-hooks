import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useContractsFor = ({ ...props }: Omit<TSocketQueryOptions<'contracts_for'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'contracts_for', ...props });

    return {
        data: data?.contracts_for,
        ...rest,
    };
};
