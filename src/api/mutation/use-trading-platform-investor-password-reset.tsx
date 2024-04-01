import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformInvestorPasswordReset = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_investor_password_reset'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_investor_password_reset', ...props });

    return {
        data: data,
        ...rest,
    };
};
