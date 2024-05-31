// @ts-nocheck
import React, { useState } from 'react';
import { DerivAPIClient } from '../src/client-library/deriv-api-client';
import { TSocketResponseData } from '../src/types/api.types';

const derivAPI = new DerivAPIClient('wss://red.binaryws.com/websockets/v3?l=EN&app_id=1089&brand=deriv');

export const SandboxPage = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState<TSocketResponseData<'ticks'>>();

    const handleClick = async () => {
        const subs_id = await derivAPI.subscribe('ticks', { ticks: 'R_50' }, data => setData(data));
        setId(subs_id);
    };

    const handleClick2 = async () => {
        if (id) {
            await derivAPI.unsubscribe(id);
        }
    };

    return (
        <div>
            <div>
                <div>{data?.tick?.ask ?? ''}</div>
                <button onClick={handleClick}>Subscribe</button>
                <button onClick={handleClick2}>Unsubscribe</button>
            </div>
        </div>
    );
};
