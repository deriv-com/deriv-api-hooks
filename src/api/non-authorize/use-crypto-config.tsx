import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useCryptoConfig = ({ ...props }: Omit<TSocketQueryOptions<'crypto_config'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'crypto_config', ...props });

    return {
        data: data?.crypto_config,
        ...rest,
    };
};
