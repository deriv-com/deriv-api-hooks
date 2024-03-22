import { useAuthorizeQuery } from '../../base';

export const useRequestReport = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'request_report' });

    return {
        data: data?.request_report,
        ...rest,
    };
};
