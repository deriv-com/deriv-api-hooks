import { useMutation } from '../../base';

export const useTradingPlatformPasswordChange = () => {
    const { data, ...rest } = useMutation({ name: 'trading_platform_password_change' });

    return {
        data: data?.trading_platform_password_change,
        ...rest,
    };
};
