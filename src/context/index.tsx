import { createContext, useState, useEffect } from "react";
interface LoadingContextProps {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Message_data = createContext<LoadingContextProps | undefined>(undefined);

function Context({ children }:any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem("isLoading", JSON.stringify(isLoading));
    }, [isLoading]);
    

    useEffect(() => {
        const storedValue = localStorage.getItem("isLoading");

        if (storedValue !== null) {
            setIsLoading(JSON.parse(storedValue));
        } 
    }, []);
  
    return (
      <Message_data.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </Message_data.Provider>
    );
}
  
export default Context