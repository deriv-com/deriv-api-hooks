import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useWalletMigration = ({ ...props }: Omit<AugmentedMutationOptions<'wallet_migration'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'wallet_migration', ...props });

    return {
        data: data?.wallet_migration,
        ...rest,
    };
};
