import React, { useEffect } from 'react';
import { useExchangeRates } from '../src/index';

export const SandboxPage = () => {
    const { data, subscribeRates } = useExchangeRates();

    useEffect(() => {
        subscribeRates({ base_currency: 'USD', target_currencies: ['IDR'] });
    }, []);

    console.log(data?.exchange_rates);

    return (
        <div>
            <div>
                <button></button>
            </div>
        </div>
    );
};
