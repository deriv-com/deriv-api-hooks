import { useAuthorizeQuery } from '../../base';

export const useWalletMigration = () => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'wallet_migration' });

    return {
        data: data?.wallet_migration,
        ...rest,
    };
};
