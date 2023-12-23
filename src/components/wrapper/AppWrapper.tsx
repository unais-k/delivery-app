import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../navbar";
import Footer from "../Footer";
import { Provider } from "react-redux";
import { store,persistor } from "./../../lib/store";
import { PersistGate } from 'redux-persist/integration/react'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const isNavbarAllowed = router.pathname != "/auth";
    const isOTP = router.pathname != "/auth/otp";

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastContainer />
                {isNavbarAllowed && isOTP && <Navbar />}
                <main>{children} </main>
                {isNavbarAllowed && isOTP && <Footer />}
                </PersistGate>
            </Provider>
            {/* {isNavbarAllowed && <Footer />} */}
        </div>
    );
}
