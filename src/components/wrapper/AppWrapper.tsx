import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Provider } from "react-redux";
import { store } from "./../../lib/store";

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
                <ToastContainer />
                {isNavbarAllowed && isOTP && <Navbar />}
                <main>{children} </main>
                {isNavbarAllowed && isOTP && <Footer />}
            </Provider>
            {/* {isNavbarAllowed && <Footer />} */}
        </div>
    );
}
