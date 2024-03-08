import { useMutation } from '../../base';

export const useApiToken = () => {
    const { data, ...rest } = useMutation({ name: 'api_token' });

    return {
        data: data?.api_token,
        ...rest,
    };
};
