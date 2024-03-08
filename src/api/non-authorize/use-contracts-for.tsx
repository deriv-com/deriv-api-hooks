import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useContractsFor = ({ payload }: TSocketQueryOptions<'contracts_for'>) => {
    const { data, ...rest } = useQuery({ name: 'contracts_for', payload });

    return {
        data: data?.contracts_for,
        ...rest,
    };
};
