import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePaymentagentDetails = ({
    ...props
}: Omit<TSocketQueryOptions<'paymentagent_details'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'paymentagent_details', ...props });

    return {
        data: data?.paymentagent_details,
        ...rest,
    };
};
