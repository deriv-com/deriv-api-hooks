import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useWalletMigration = ({ ...props }: Omit<TSocketQueryOptions<'wallet_migration'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'wallet_migration', ...props });

    return {
        data: data?.wallet_migration,
        ...rest,
    };
};
