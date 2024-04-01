import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePaymentagentWithdrawJustification = ({
    ...props
}: Omit<TSocketQueryOptions<'paymentagent_withdraw_justification'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'paymentagent_withdraw_justification', ...props });

    return {
        data: data?.paymentagent_withdraw_justification,
        ...rest,
    };
};
