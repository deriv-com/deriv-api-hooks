import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pAdvertiserAdverts = ({
    ...props
}: Omit<TSocketQueryOptions<'p2p_advertiser_adverts'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_adverts', ...props });

    return {
        data: data?.p2p_advertiser_adverts,
        ...rest,
    };
};
