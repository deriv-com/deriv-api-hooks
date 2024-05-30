import React from 'react';
import { DerivAPIClient } from '../src/client-library/deriv-api-client';

const derivAPI = new DerivAPIClient('wss://red.binaryws.com/websockets/v3?l=EN&app_id=1089&brand=deriv');

export const SandboxPage = () => {
    const handleSomeShit = async () => {
        const response = await derivAPI.send('ping');
        console.log(response.ping);
    };

    return (
        <div>
            <div>
                <button onClick={() => handleSomeShit()}>Kelik</button>
            </div>
        </div>
    );
};
