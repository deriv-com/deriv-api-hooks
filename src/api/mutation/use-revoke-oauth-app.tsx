import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useRevokeOauthApp = ({ ...props }: Omit<AugmentedMutationOptions<'revoke_oauth_app'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'revoke_oauth_app', ...props });

    return {
        data: data?.revoke_oauth_app,
        ...rest,
    };
};
