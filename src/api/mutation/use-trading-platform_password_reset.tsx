import { useMutation } from '../../base';

export const useTradingPlatformPasswordReset = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_password_reset' });

    return {
        data: data?.trading_platform_password_reset,
        ...rest,
    };
};
