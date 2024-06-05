import React from 'react';
import { useAccountList } from '../src/api/authorize';
import { URLUtils } from '@deriv-com/utils';

export const SandboxPage = () => {
    const { data } = useAccountList();

    return (
        <div>
            <a href={URLUtils.getOauthURL()}>Login</a>
            <div>
                <div>{JSON.stringify(data)}</div>
            </div>
        </div>
    );
};
