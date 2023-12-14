import Image from "next/image";
import { passwordIcon, phoneIcon, userIcon } from "../../../../public";
import React, { useState, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/router";

type SignUpProps = {
    fullName: string;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SignUpForm: React.FC<SignUpProps> = ({
    phone,
    setPassword,
    password,
    setPhone,
    fullName,
    setFullName,
    onFormSubmit,
}) => {
    const router = useRouter();

    // const getOtp = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     try {
    //         const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});

    //         const confirmation = await signInWithPhoneNumber(auth, `+${phone}`, recaptchaVerifier)
    //             .then((confirm) => {
    //                 router.push("/auth/otp");
    //                 setVerification(confirm);
    //                 console.log(confirm);
    //             })
    //             .catch((error: any) => {
    //                 console.log(error.message);
    //             });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="items-stretch bg-white flex flex-col justify-center px-4 mt-6">
                    <div className="items-center border flex justify-between gap-3.5 px-4 py-3.5  rounded-xl border-solid border-zinc-300">
                        <Image
                            alt="user-icon"
                            loading="lazy"
                            src={userIcon}
                            className="aspect-square object-contain object-center w-6 overflow-hidden  max-w-full my-auto"
                        />
                        <input
                            type="text"
                            placeholder="full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="text-neutral-500 text-lg outline-none bg-transparent border-transparent focus:outline-none font-semibold leading-8 self-stretch grow shrink basis-auto"
                        />
                    </div>
                </div>
                <div className="items-stretch  bg-white flex flex-col justify-center mt-3 px-4 py-3.5 rounded-xl">
                    <div className="items-center flex justify-between gap-3.5">
                        <PhoneInput
                            country={"in"}
                            inputStyle={{ width: "100%" }}
                            value={phone}
                            onChange={(e) => setPhone(e)}
                        />
                    </div>
                </div>
                <div className="items-stretch bg-white flex flex-col justify-center px-4  mt-3">
                    <div className="items-center border flex justify-between gap-3.5 px-4 py-3.5  rounded-md border-solid border-zinc-300">
                        <Image
                            alt="password"
                            loading="lazy"
                            src={passwordIcon}
                            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-neutral-500 text-lg outline-none bg-transparent border-transparent focus:outline-none font-semibold leading-8 self-stretch grow shrink basis-auto"
                        />
                    </div>
                </div>

                <div className="mt-3 ms-4" id="recaptcha"></div>
                <button
                    type="submit"
                    className="text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-zinc-900 mt-8 px-6 py-5 rounded-xl max-md:px-5"
                >
                    Register
                </button>
            </form>
        </>
    );
};

export default SignUpForm;
