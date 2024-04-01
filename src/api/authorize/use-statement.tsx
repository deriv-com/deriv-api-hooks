import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useStatement = ({ ...props }: Omit<TSocketQueryOptions<'statement'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'statement', ...props });

    return {
        data: data?.statement,
        ...rest,
    };
};
