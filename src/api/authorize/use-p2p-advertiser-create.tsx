import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2PAdvertiserCreate = ({
    ...props
}: Omit<TSocketQueryOptions<'p2p_advertiser_create'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_create', ...props });

    return {
        data: data?.p2p_advertiser_create,
        ...rest,
    };
};
