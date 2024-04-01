import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useContractUpdateHistory = ({
    ...props
}: Omit<TSocketQueryOptions<'contract_update_history'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'contract_update_history', ...props });

    return {
        data: data?.contract_update_history,
        ...rest,
    };
};
