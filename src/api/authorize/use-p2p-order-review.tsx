import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pOrderReview = ({ ...props }: Omit<TSocketQueryOptions<'p2p_order_review'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_order_review', ...props });

    return {
        data: data?.p2p_order_review,
        ...rest,
    };
};
