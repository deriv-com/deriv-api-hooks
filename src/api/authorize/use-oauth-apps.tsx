import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useOauthApps = ({ ...props }: Omit<TSocketQueryOptions<'oauth_apps'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'oauth_apps', ...props });

    return {
        data: data?.oauth_apps,
        ...rest,
    };
};
