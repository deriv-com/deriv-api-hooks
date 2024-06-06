import React, { useEffect } from 'react';
import { useAccountList } from '../src/api/authorize';
import { URLUtils } from '@deriv-com/utils';
import { useSubscribe } from '../src/base';

export const SandboxPage = () => {
    const { data } = useAccountList();
    const { data: exchangeRateData, subscribe: subscribeExchangeRates } = useSubscribe('exchange_rates');
    const { data: ticksData, subscribe: subscribeTicks } = useSubscribe('ticks');

    useEffect(() => {
        subscribeExchangeRates({ base_currency: 'USD', target_currency: 'AED' });
        subscribeTicks({ ticks: 'R_50' });
    }, []);

    return (
        <div>
            <a href={URLUtils.getOauthURL()}>Login</a>
            <div>
                <div>{JSON.stringify(ticksData?.tick)}</div>
                <div>{JSON.stringify(exchangeRateData && exchangeRateData.exchange_rates)}</div>
                <div>{JSON.stringify(data)}</div>
            </div>
        </div>
    );
};
