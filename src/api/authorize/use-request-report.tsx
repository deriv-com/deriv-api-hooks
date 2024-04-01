import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useRequestReport = ({ ...props }: Omit<TSocketQueryOptions<'request_report'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'request_report', ...props });

    return {
        data: data?.request_report,
        ...rest,
    };
};
