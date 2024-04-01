import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformNewAccount = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_new_account'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_new_account', ...props });

    return {
        data: data?.trading_platform_new_account,
        ...rest,
    };
};
