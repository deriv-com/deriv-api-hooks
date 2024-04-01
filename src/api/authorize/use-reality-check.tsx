import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useRealityCheck = ({ ...props }: Omit<TSocketQueryOptions<'reality_check'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'reality_check', ...props });

    return {
        data: data?.reality_check,
        ...rest,
    };
};
