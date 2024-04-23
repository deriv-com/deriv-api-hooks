import { useMemo } from 'react';
import { useInfiniteQuery } from '../../base';
import { TPaginatedQueryOptions } from '../../base/use-infinite-query';

export const useP2PAdvertList = ({
    ...props
}: Omit<TPaginatedQueryOptions<'p2p_advert_list'>, 'name' | 'getNextPageParam'> = {}) => {
    const { data, fetchNextPage, ...rest } = useInfiniteQuery({
        name: 'p2p_advert_list',
        ...props,
        getNextPageParam: (lastPage, pages) => {
            if (!lastPage?.p2p_advert_list?.list?.length) return;

            return pages.length;
        },
    });

    const flattenedData = useMemo(() => {
        if (!data?.pages?.length) return;

        return data?.pages?.flatMap(page => page?.p2p_advert_list?.list);
    }, [data?.pages]);

    return {
        data: flattenedData,
        loadMoreAdverts: fetchNextPage,
        ...rest,
    };
};
