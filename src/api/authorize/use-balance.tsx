import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useBalance = ({ payload }: TSocketQueryOptions<'balance'>) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'balance', payload });

    return {
        data: data?.balance,
        ...rest,
    };
};
