import { useMutation } from '../../base';

export const useTradingPlatformNewAccount = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_new_account' });

    return {
        data: data?.trading_platform_new_account,
        ...rest,
    };
};
