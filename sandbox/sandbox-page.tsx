import React from 'react';
import { useWebsiteStatus } from '../src/api/non-authorize/use-website-status';

export const SandboxPage = () => {
    const { data } = useWebsiteStatus();

    return (
        <div>
            <div>
                <div>{JSON.stringify(data)}</div>
            </div>
        </div>
    );
};
