import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useStatement = (): { data: TSocketResponseData<'statement'>['statement'] } & Omit<
    TSocketQueryResults<'statement'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'statement' });

    return {
        data: data?.statement,
        ...rest,
    };
};
