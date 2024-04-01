import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformPasswordReset = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_password_reset'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_password_reset', ...props });

    return {
        data: data?.trading_platform_password_reset,
        ...rest,
    };
};
