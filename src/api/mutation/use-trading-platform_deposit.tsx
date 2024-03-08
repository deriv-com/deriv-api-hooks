import { useMutation } from '../../base';

export const useTradingPlatformDeposit = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_deposit' });

    return {
        data: data?.trading_platform_deposit,
        ...rest,
    };
};
