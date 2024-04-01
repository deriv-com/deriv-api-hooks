import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformWithdrawal = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_withdrawal'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_withdrawal', ...props });

    return {
        data: data?.trading_platform_withdrawal,
        ...rest,
    };
};
