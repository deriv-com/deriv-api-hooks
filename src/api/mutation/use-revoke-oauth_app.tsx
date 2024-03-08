import { useMutation } from '../../base';

export const useRevokeOauthApp = () => {
    const { data, ...rest } = useMutation({ name: 'revoke_oauth_app' });

    return {
        data: data?.revoke_oauth_app,
        ...rest,
    };
};
