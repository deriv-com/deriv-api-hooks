import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAssetIndex = ({ payload }: TSocketQueryOptions<'asset_index'>) => {
    const { data, ...rest } = useQuery({ name: 'asset_index', payload });

    return {
        data: data?.asset_index,
        ...rest,
    };
};
