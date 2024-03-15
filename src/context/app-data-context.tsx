import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';
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

/**
 * By design, this is the only provider that should be exported out.
 * Absrtracts out the sequence of the providers.
 *
 * @param {PropsWithChildren} { children } - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider component wrapping its children with App data context.
 */
export const AppDataProvider = ({ children }: PropsWithChildren) => {
    const [activeLoginid, setActiveLoginid] = useState('');
    const [environment, setEnvironment] = useState<Environment>('demo');

    return (
        <AppDataContext.Provider value={{ environment, setEnvironment, activeLoginid, setActiveLoginid }}>
            <APIProvider>
                <AuthDataProvider>{children}</AuthDataProvider>
            </APIProvider>
        </AppDataContext.Provider>
    );
};
