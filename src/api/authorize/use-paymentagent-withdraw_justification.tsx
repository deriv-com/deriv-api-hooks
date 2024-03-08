import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const usePaymentagentWithdrawJustification = (): {
    data: TSocketResponseData<'paymentagent_withdraw_justification'>['paymentagent_withdraw_justification'];
} & Omit<TSocketQueryResults<'paymentagent_withdraw_justification'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'paymentagent_withdraw_justification' });

    return {
        data: data?.paymentagent_withdraw_justification,
        ...rest,
    };
};
