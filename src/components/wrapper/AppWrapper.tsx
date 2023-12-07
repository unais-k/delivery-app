import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const isNavbarAllowed = router.pathname != "/auth";

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <ToastContainer />
            {isNavbarAllowed && <Navbar />}
            <main>{children} </main>

            {/* {isNavbarAllowed && <Footer />} */}
        </div>
    );
}
