import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

/**
 * A custom hook that returns an object containing the list of countries available for P2P trading.
 *
 * For returning details of a specific country, the country code can be passed in the payload.
 * @example
 *  useP2PCountryList({
 *      payload: {
 *          country: 'id'
 *      }
 *  })
 */
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
