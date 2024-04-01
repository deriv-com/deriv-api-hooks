import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useKycAuthStatus = ({ ...props }: Omit<TSocketQueryOptions<'kyc_auth_status'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'kyc_auth_status', ...props });

    return {
        data: data?.kyc_auth_status,
        ...rest,
    };
};
