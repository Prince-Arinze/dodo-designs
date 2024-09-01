"use client"
import { createContext, useState, useContext, ReactNode, useReducer} from "react";

const Context = createContext<any>(null);

export function useAppContext() {
    return useContext(Context);
}

type Props = {
    children: ReactNode;
};

const ContextProvider = ({children}: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const value = {
        isSidebarOpen, 
        setIsSidebarOpen,
        toggleSidebar
    }

    const {Provider} = Context;

  return (
    <Provider value={value}>
        {children}
    </Provider>
  )
}

export default ContextProvider