import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pAdvertiserList = ({ ...props }: Omit<TSocketQueryOptions<'p2p_advertiser_list'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_list', ...props });

    return {
        data: data?.p2p_advertiser_list,
        ...rest,
    };
};
