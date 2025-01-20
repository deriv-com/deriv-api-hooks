import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from 'react';
import { AuthDataProvider } from './auth-context';
import { APIProvider } from './api-context';

type Environment = 'real' | 'demo';

type AppData = {
    environment: Environment;
    setEnvironment: Dispatch<SetStateAction<Environment>>;
    activeLoginid: string;
    setActiveLoginid: Dispatch<SetStateAction<string>>;
};

export const AppDataContext = createContext<AppData | null>(null);

type AppDataProviderProps = PropsWithChildren & { accountType?: string; currency?: string };

/**
 * By design, this is the only provider that should be exported out.
 * Absrtracts out the sequence of the providers.
 *
 * @param {string} accountType - The desired account type tied to the login ID eg. CR, VRTC, MF, etc.
 * @param {string} currency - The desired currency tied to the login ID, eg. USD, EUR, BTC etc.
 * @param {PropsWithChildren} { children } - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component wrapping its children with App data context.
 */
export const AppDataProvider = ({ accountType = '', children, currency = '' }: AppDataProviderProps) => {
    const [activeLoginid, setActiveLoginid] = useState('');
    const [environment, setEnvironment] = useState<Environment>('demo');

    const value = useMemo(
        () => ({ environment, setEnvironment, activeLoginid, setActiveLoginid }),
        [environment, setEnvironment, activeLoginid, setActiveLoginid]
    );

    return (
        <AppDataContext.Provider value={value}>
            <APIProvider>
                <AuthDataProvider accountType={accountType} currency={currency}>
                    {children}
                </AuthDataProvider>
            </APIProvider>
        </AppDataContext.Provider>
    );
};
