import { useMutation } from '../../base';

export const useTradingPlatformInvestorPasswordReset = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_investor_password_reset' });

    return {
        data: data?.trading_platform_investor_password_reset,
        ...rest,
    };
};
