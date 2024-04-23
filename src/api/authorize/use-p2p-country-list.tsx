import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2PCountryList = ({ ...props }: Omit<TSocketQueryOptions<'p2p_country_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({
        name: 'p2p_country_list',
        ...props,
    });

    return {
        data: data?.p2p_country_list,
        ...rest,
    };
};
