import { TSocketQueryOptions, useQuery } from '../../base/use-query';

export const useWebsiteStatus = ({ ...props }: Omit<TSocketQueryOptions<'website_status'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'website_status', ...props });

    return {
        data: data?.website_status,
        ...rest,
    };
};
