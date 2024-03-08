import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useRequestReport = (): { data: TSocketResponseData<'request_report'>['request_report'] } & Omit<
    TSocketQueryResults<'request_report'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'request_report' });

    return {
        data: data?.request_report,
        ...rest,
    };
};
