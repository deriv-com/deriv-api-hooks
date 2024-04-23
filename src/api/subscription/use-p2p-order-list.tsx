import { useMemo } from 'react';
import { useSubscribe, useInfiniteQuery } from '../../base';
import { TPaginatedQueryOptions } from '../../base/use-infinite-query';

export const useP2POrderList = ({
    ...props
}: Omit<TPaginatedQueryOptions<'p2p_order_list'>, 'name' | 'getNextPageParam'> = {}) => {
    const { data: subscriptionData, subscribe, unsubscribe } = useSubscribe('p2p_order_list');

    const { data, fetchNextPage, ...rest } = useInfiniteQuery({
        name: 'p2p_order_list',
        ...props,
        getNextPageParam: (lastPage, pages) => {
            if (!lastPage?.p2p_order_list?.list?.length) return;

            return pages.length;
        },
    });

    const flattenedData = useMemo(() => {
        if (!data?.pages?.length) return;

        return data?.pages?.flatMap(page => page?.p2p_order_list?.list);
    }, [data?.pages]);

    return {
        data: flattenedData,
        subscriptionData,
        subscribe,
        unsubscribe,
        loadMoreOrders: fetchNextPage,
        ...rest,
    };
};
