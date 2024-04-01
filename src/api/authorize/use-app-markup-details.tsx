import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAppMarkupDetails = ({ ...props }: Omit<TSocketQueryOptions<'app_markup_details'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'app_markup_details', ...props });

    return {
        data: data?.app_markup_details,
        ...rest,
    };
};
