import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useWalletMigration = (): { data: TSocketResponseData<'wallet_migration'>['wallet_migration'] } & Omit<
    TSocketQueryResults<'wallet_migration'>,
    'data'
> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'wallet_migration' });

    return {
        data: data?.wallet_migration,
        ...rest,
    };
};
