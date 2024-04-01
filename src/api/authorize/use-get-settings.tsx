import { useAuthorizeQuery } from '../../base';

export const useGetSettings = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_settings' });

    return {
        data: data?.get_settings,
        ...rest,
    };
};
