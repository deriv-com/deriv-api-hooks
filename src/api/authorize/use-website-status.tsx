import { useAuthorizeQuery } from '../../base';

export const useWebsiteStatus = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'website_status' });

    return {
        data: data?.website_status,
        ...rest,
    };
};
