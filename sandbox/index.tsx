import React from 'react';
import ReactDOM from 'react-dom/client';
import { SandboxPage } from './sandbox-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { APIProvider } from '../src/context/api-context';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <APIProvider>
            <QueryClientProvider client={client}>
                <SandboxPage />
            </QueryClientProvider>
        </APIProvider>
    </React.StrictMode>
);
