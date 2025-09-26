import { createContext, ReactNode, useContext } from "react";

interface AppContextType { }


const AppContext = createContext<AppContextType>({} as AppContextType);


type ContextProviderProps = {
    children: ReactNode;
};


export const AppContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <AppContext.Provider value={{}}>{children}</AppContext.Provider>
    );
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used inside AppContextProvider');
    }
}