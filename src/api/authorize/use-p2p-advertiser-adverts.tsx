import { useMemo } from 'react';
import { useUseInfiniteQuery } from '../../base';
import { TPaginatedQueryOptions } from '../../base/use-infinite-query';

export const useP2pAdvertiserAdverts = ({
    ...props
}: Omit<TPaginatedQueryOptions<'p2p_advertiser_adverts'>, 'name'> = {}) => {
    const { data, fetchNextPage, ...rest } = useUseInfiniteQuery({
        name: 'p2p_advertiser_adverts',
        ...props,
        getNextPageParam: props.getNextPageParam
            ? props.getNextPageParam
            : (lastPage, pages) => {
                  if (!lastPage?.p2p_advertiser_adverts?.list?.length) return;

                  return pages.length;
              },
    });

    const flattenedData = useMemo(() => {
        if (!data?.pages?.length) return;

        return data?.pages?.flatMap(page => page?.p2p_advertiser_adverts?.list);
    }, [data?.pages]);

    return {
        data: flattenedData,
        loadMoreAdverts: fetchNextPage,
        ...rest,
    };
};
