import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useWebsiteStatus = ({ ...props }: Omit<TSocketQueryOptions<'website_status'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'website_status', ...props });

    return {
        data: data?.website_status,
        ...rest,
    };
};
