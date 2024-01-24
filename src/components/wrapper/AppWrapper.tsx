import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
import { Provider } from "react-redux";
import { store, persistor } from "./../../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "../Navbar";
import { createContext, useState, useEffect } from "react";
import Context from "@/context";
import InnerLoader from "../innerLoader";

interface LoadingContextProps {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // const [isLoading, setIsLoading] = useState(true);
    const isNavbarAllowed = router.pathname != "/auth";
    // useEffect(() => {
    //     const storedValue = localStorage.getItem("isLoading");

    //     if (storedValue !== null) {
    //         setIsLoading(JSON.parse(storedValue));
    //     } else {
    //         setIsLoading(true);
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("isLoading", JSON.stringify(isLoading));
    // }, [isLoading]);

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <Provider store={store}>
                {/* <LoadingContext.Provider value={{ isLoading, setIsLoading }}> */}
                <Context>
                    <PersistGate loading={null} persistor={persistor}>
                        <ToastContainer />

                        {/* {isNavbarAllowed && <Navbar />} */}
                        {/* <InnerLoader> */}
                            <Navbar />

                            <main>{children} </main>
                            {/* <Footer/> */}
                            {isNavbarAllowed && <Footer />}
                        {/* </InnerLoader> */}
                    </PersistGate>
                </Context>
                {/* </LoadingContext.Provider> */}
            </Provider>
        </div>
    );
}
