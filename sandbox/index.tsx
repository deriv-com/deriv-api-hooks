import React from 'react';
import ReactDOM from 'react-dom/client';
import { SandboxPage } from './sandbox-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppDataProvider } from '../src/context/app-data-context';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <AppDataProvider>
                <SandboxPage />
            </AppDataProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
