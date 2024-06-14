import React, { useEffect } from 'react';
import { useAccountList } from '../src/api/authorize';
import { URLUtils } from '@deriv-com/utils';
import { useSubscribe } from '../src/base';

export const SandboxPage = () => {
    const { data } = useAccountList();
    const { data: exchangeRateData, subscribe: subscribeExchangeRates } = useSubscribe('exchange_rates');
    const {
        data: ticksData,
        subscribe: subscribeTicks,
        unsubscribe: unsubscribeTicks,
        status,
        error: ticksError,
    } = useSubscribe('ticks');

    useEffect(() => {
        subscribeExchangeRates({ base_currency: 'USD', target_currency: 'AED' });
        subscribeTicks({ ticks: 'R_100' });
    }, []);

    return (
        <div>
            <div className=''>{status}</div>
            <div>{ticksError && JSON.stringify(ticksError)}</div>
            <a href={URLUtils.getOauthURL()}>Login</a>
            <div>
                <div>{JSON.stringify(ticksData?.tick)}</div>
                <div>{JSON.stringify(exchangeRateData && exchangeRateData.exchange_rates)}</div>
                <div>{JSON.stringify(data)}</div>
            </div>
            <button onClick={() => subscribeTicks({ ticks: '1HZ50V' })}>Subscribe to Different Ticks</button>
            <button onClick={() => unsubscribeTicks()}>Unsubscribe Ticks</button>
        </div>
    );
};
