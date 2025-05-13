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

type AppDataProviderProps = PropsWithChildren & { accountTypes?: string[]; currencies?: string[] };

/**
 * By design, this is the only provider that should be exported out.
 * Absrtracts out the sequence of the providers.
 *
 * @param {Array<string>} accountTypes - The desired account types tied to the login ID eg. CR, VRTC, MF, etc.
 * @param {Array<string>} currencies - The desired currencies tied to the login ID, eg. USD, EUR, BTC etc.
 * @param {PropsWithChildren} { children } - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component wrapping its children with App data context.
 */
export const AppDataProvider = ({ accountTypes = [], children, currencies = [] }: AppDataProviderProps) => {
    const [activeLoginid, setActiveLoginid] = useState('');
    const [environment, setEnvironment] = useState<Environment>('demo');

    const value = useMemo(
        () => ({ environment, setEnvironment, activeLoginid, setActiveLoginid }),
        [environment, setEnvironment, activeLoginid, setActiveLoginid]
    );

    return (
        <AppDataContext.Provider value={value}>
            <APIProvider>
                <AuthDataProvider accountTypes={accountTypes} currencies={currencies}>
                    {children}
                </AuthDataProvider>
            </APIProvider>
        </AppDataContext.Provider>
    );
};
