import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useP2pPing = ({ ...props }: Omit<TSocketQueryOptions<'p2p_ping'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'p2p_ping', ...props });

    return {
        data: data?.p2p_ping,
        ...rest,
    };
};
