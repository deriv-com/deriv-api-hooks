import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useContractUpdateHistory = (): {
    data: TSocketResponseData<'contract_update_history'>['contract_update_history'];
} & Omit<TSocketQueryResults<'contract_update_history'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'contract_update_history' });

    return {
        data: data?.contract_update_history,
        ...rest,
    };
};
