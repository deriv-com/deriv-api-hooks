import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pAdvertiserRelations = ({
    ...props
}: Omit<TSocketQueryOptions<'p2p_advertiser_relations'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advertiser_relations', ...props });

    return {
        data: data?.p2p_advertiser_relations,
        ...rest,
    };
};
