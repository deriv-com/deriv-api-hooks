import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppDataProvider } from '../src/context';
import { SandboxPage } from './sandbox-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <AppDataProvider>
                <SandboxPage />
            </AppDataProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
