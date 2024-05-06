import { useInfiniteQuery } from '../../base';
import { TPaginatedQueryOptions } from '../../base/use-infinite-query';
import { useMemo } from 'react';

export const useP2pAdvertiserList = ({
    ...props
}: Omit<TPaginatedQueryOptions<'p2p_advertiser_list'>, 'name' | 'getNextPageParam'> = {}) => {
    const { data, fetchNextPage, ...rest } = useInfiniteQuery({
        name: 'p2p_advertiser_list',
        ...props,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage?.p2p_advertiser_list?.list.length === 0 || !lastPage?.p2p_advertiser_list?.list) return;

            return pages.length;
        },
    });

    const flattenedData = useMemo(() => {
        if (!data?.pages?.length) return;

        return data?.pages?.flatMap(page => page?.p2p_advertiser_list?.list);
    }, [data?.pages]);

    return {
        data: flattenedData,
        loadMoreAdvertisers: fetchNextPage,
        ...rest,
    };
};
