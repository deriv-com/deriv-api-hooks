import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useWebsiteConfig = ({ ...props }: Omit<TSocketQueryOptions<'website_config'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'website_config', ...props });

    return {
        data: data?.website_config,
        ...rest,
    };
};
