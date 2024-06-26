import { useCallback, useRef, useState } from 'react';
import { useSubscribe } from '../../base';

type TCurrencyExchangeSubscribeFunction<T> = { base_currency: T; target_currencies: T[] };

export const useExchangeRates = () => {
    const { data, subscribe, unsubscribe } = useSubscribe('exchange_rates');
    const [exchangeRates, setExchangeRates] = useState<Record<string, Record<string, number>>>({});
    const exchangeRatesSubscriptions = useRef<{ base_currency: string; target_currency: string }[]>([]);

    const subscribeRates = useCallback(
        ({ base_currency, target_currencies }: TCurrencyExchangeSubscribeFunction<string>) => {
            target_currencies.reduce(async (prevPromise, target_currency) => {
                await prevPromise;
                exchangeRatesSubscriptions.current.push({ base_currency, target_currency });
                return await subscribe({ base_currency, target_currency });
            }, Promise.resolve());

            const newExchangeRates = { ...exchangeRates };

            if (!newExchangeRates[base_currency]) newExchangeRates[base_currency] = {};

            target_currencies.forEach(c => {
                newExchangeRates[base_currency][c] = 1;
            });

            setExchangeRates(newExchangeRates);

            return newExchangeRates;
        },
        [exchangeRates, subscribe]
    );

    const unsubscribeRates = useCallback(
        async ({ base_currency, target_currencies }: TCurrencyExchangeSubscribeFunction<string>) => {
            exchangeRatesSubscriptions.current = exchangeRatesSubscriptions.current.filter(s => {
                if (s.base_currency === base_currency && target_currencies.includes(s.target_currency)) {
                    unsubscribe();
                    return false;
                }
                return true;
            });

            setExchangeRates(prev => {
                const currentData = { ...(prev ?? {}) };
                if (currentData[base_currency]) {
                    target_currencies.forEach(c => {
                        delete currentData[base_currency][c];
                    });
                }
                return currentData;
            });
        },
        [unsubscribe]
    );

    const getExchangeRate = (base: string, target: string) => {
        return exchangeRates?.[base]?.[target] ?? 1;
    };

    return { data, exchangeRates, getExchangeRate, subscribeRates, unsubscribeRates };
};
