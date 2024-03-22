import { useAuthorizeQuery } from '../../base';

export const useAccountStatistics = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'account_statistics' });

    return {
        data: data?.account_statistics,
        ...rest,
    };
};
