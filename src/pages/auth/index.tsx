import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { closeIcon } from "../../../public";
import SignInForm from "@/components/modules/authPage/SignInForm";
import SignUpForm from "@/components/modules/authPage/SignUpForm";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import OTPForm from "@/components/modules/authPage/OTPForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { handleSIGNUP } from "./utils";

const Login: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("Log in");
    const [fullName, setFullName] = useState<string>("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [otpSend, setOtpSend] = useState(false);
    const [verification, setVerification] = useState<any>({});
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

    const router = useRouter();

    const handleRegister = () => {
        if (!isRegister) {
            setIsRegister(true);
            setIsLogin(false);
            setTitle("Register");
        } else {
            setIsLogin(true);
            setIsRegister(false);
            setTitle("Log in");
        }
    };

    const handleVerifyOTP = async (e: FormEvent<HTMLFormElement>) => {
        // register
        e.preventDefault();

        try {
            const otpString = otp.join("");
            const data = await verification.confirm(otpString);
            const RegisterData = {
                fullName: fullName,
                phone: phone,
                password: password,
            };
            if (data) {
                toast.info("otp");
                const response = await handleSIGNUP(RegisterData);
                console.log(response);

                router.push("/");
            }
        } catch (error) {
            alert(error);
            router.push("/auth");
            setOtpSend(false);
            setIsRegister(true);
        }

        // console.log("verify confirming", otp);
        // alert("otp confirming");
        // alert("write verification logic");
        // router.push("/");
    };

    const handleOTP = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phone.length < 5) {
            return alert("not enough number");
        }
        try {
            const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});

            const confirmation = await signInWithPhoneNumber(auth, `+${phone}`, recaptchaVerifier)
                .then((confirm) => {
                    setVerification(confirm);
                    setOtpSend(true);
                    setIsRegister(false);
                    setIsLogin(false);
                    toast.info(`OTP Send to the ${phone}`);
                })
                .catch((error: any) => {
                    console.log(error.message);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phone.length < 10) {
            // error
        }
        if (password.length < 4) {
            // error
        }
        console.log("clicked");
    };

    return (
        <div className="justify-center items-center bg-zinc-900 bg-opacity-80 flex w-full flex-col h-screen max-md:max-w-full">
            <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col px-8 py-10 rounded-xl border-solid border-zinc-300">
                <div className="items-stretch flex justify-between gap-2">
                    <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow shrink basis-auto">
                        {title}
                    </div>
                    <Image
                        alt="close"
                        loading="lazy"
                        src={closeIcon}
                        className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>

                {isRegister ? (
                    <SignUpForm
                        phone={phone}
                        setPhone={setPhone}
                        password={password}
                        setPassword={setPassword}
                        fullName={fullName}
                        setFullName={setFullName}
                        onFormSubmit={handleOTP}
                    />
                ) : null}

                {isLogin ? (
                    <SignInForm
                        phone={phone}
                        setPhone={setPhone}
                        password={password}
                        setPassword={setPassword}
                        onFormSubmit={handleLogin}
                    />
                ) : null}

                {otpSend ? <OTPForm otp={otp} setOtp={setOtp} onFormSubmit={handleVerifyOTP} /> : null}

                <div className="justify-start items-stretch flex mt-8">
                    <div
                        onClick={handleRegister}
                        className="text-neutral-500 text-center text-xl font-semibold leading-7 tracking-tight whitespace-nowrap"
                    >
                        {isLogin ? "Don’t have an account ?" : ""}
                        {isRegister ? "Return to Log in" : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
