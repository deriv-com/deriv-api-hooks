import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAppMarkupStatistics = ({
    ...props
}: Omit<TSocketQueryOptions<'app_markup_statistics'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'app_markup_statistics', ...props });

    return {
        data: data?.app_markup_statistics,
        ...rest,
    };
};
