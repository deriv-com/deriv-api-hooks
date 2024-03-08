import { useMutation } from '../../base';

export const useTradingPlatformWithdrawal = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_withdrawal' });

    return {
        data: data?.trading_platform_withdrawal,
        ...rest,
    };
};
