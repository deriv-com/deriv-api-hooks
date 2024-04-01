import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const usePortfolio = ({ ...props }: Omit<TSocketQueryOptions<'portfolio'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'portfolio', ...props });

    return {
        data: data?.portfolio,
        ...rest,
    };
};
