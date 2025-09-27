import { createContext, ReactNode, useContext, useState } from "react";
import { RootStore } from "./root-store";

interface AppContextType {
    rootStore: RootStore
}


const AppContext = createContext<AppContextType>({} as AppContextType);

type ContextProviderProps = {
    children: ReactNode;
};


export const AppContextProvider = ({ children }: ContextProviderProps) => {
    const [store] = useState(() => ({ rootStore: new RootStore() }));
    return (
        <AppContext.Provider value={store}>{children}</AppContext.Provider>
    );
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used inside AppContextProvider');
    }
}