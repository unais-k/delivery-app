import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
import { Provider } from "react-redux";
import { store,persistor } from "./../../lib/store";
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from "../navbar";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const isNavbarAllowed = router.pathname != "/auth";

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <ToastContainer />
            {/* {isNavbarAllowed && <Navbar />} */}
                    <Navbar/>
              
                    <main>{children} </main>
                    {/* <Footer/> */}
                
            {isNavbarAllowed && <Footer />}
                </PersistGate>
            </Provider>
        </div>
    );
}
