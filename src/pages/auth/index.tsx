import React, { useState } from "react";
import Image from "next/image";
import { closeIcon, passwordIcon, userIcon } from "../../../public";
import SignInForm from "@/components/modules/auth/SignInForm";
import SignUpForm from "@/components/modules/auth/SignUpForm";

const Login: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("Log in");
    const handleRegister = () => {
        if (!isRegister) {
            setIsRegister(true);
            setTitle("Register");
        } else {
            setIsRegister(false);
            setTitle("Log in");
        }
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

                {!isRegister ? <SignInForm /> : <SignUpForm />}

                <div className="justify-start items-stretch flex mt-8">
                    <div
                        onClick={handleRegister}
                        className="text-neutral-500 text-center text-xl font-semibold leading-7 tracking-tight whitespace-nowrap"
                    >
                        {!isRegister ? "Don’t have an account ?" : "Return to Log in"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
