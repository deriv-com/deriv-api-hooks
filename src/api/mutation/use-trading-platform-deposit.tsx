import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTradingPlatformDeposit = ({
    ...props
}: Omit<AugmentedMutationOptions<'trading_platform_deposit'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_deposit', ...props });

    return {
        data: data?.trading_platform_deposit,
        ...rest,
    };
};
