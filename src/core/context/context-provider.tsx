import { createContext, ReactNode, useContext, useState } from "react";
import { RootStore } from "../stores/root-store";

interface AppContextType {
    rootStore: RootStore
}

const AppContext = createContext<AppContextType | null>(null);

type ContextProviderProps = {
    children: ReactNode;
};


export const RootContextProvider = ({ children }: ContextProviderProps) => {
    const [store] = useState(() => ({ rootStore: new RootStore() }));
    return (
        <AppContext.Provider value={store}>{children}</AppContext.Provider>
    );
};


export const useStore = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useStore must be used inside RootContextProvider');
    }
    return context.rootStore;
}