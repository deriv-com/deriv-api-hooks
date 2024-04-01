import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useAssetIndex = ({ ...props }: Omit<TSocketQueryOptions<'asset_index'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'asset_index', ...props });

    return {
        data: data?.asset_index,
        ...rest,
    };
};
