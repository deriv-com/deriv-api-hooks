import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformInvestorPasswordChange = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_investor_password_change'>, 'name'> = {}) => {
    return useMutation({ name: 'trading_platform_investor_password_change', ...props });
};
