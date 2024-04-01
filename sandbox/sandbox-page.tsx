import React from 'react';
import { URLUtils } from '@deriv-com/utils';
import { useAccountList } from '../src/index';

export const SandboxPage = () => {
    const { data } = useAccountList();

    return (
        <div>
            <div>
                <a href={URLUtils.getOauthURL()}>Login</a>
                <div>{JSON.stringify(data)}</div>
            </div>
        </div>
    );
};
