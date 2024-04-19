import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2PAdvertInfo = ({ ...props }: Omit<TSocketQueryOptions<'p2p_advert_info'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_advert_info', ...props });

    return {
        data: data?.p2p_advert_info,
        ...rest,
    };
};
