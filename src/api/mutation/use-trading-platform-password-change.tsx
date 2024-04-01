import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformPasswordChange = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_password_change'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_password_change', ...props });

    return {
        data: data?.trading_platform_password_change,
        ...rest,
    };
};
