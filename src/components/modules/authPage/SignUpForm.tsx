import Image from "next/image";
import { passwordIcon, phoneIcon, userIcon } from "../../../../public";
import React, { useState, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";


import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/router";

type SignUpProps = {
    fullName: string;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    buttonSubmit: boolean;
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
    buttonSubmit,
    fullName,
    setFullName,
    onFormSubmit,
}) => {
    const router = useRouter();

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
                {buttonSubmit ? (
                    <div className="sm:px-4 px-0">
                        <div className="flex gap-1 text-white text-center text-lg font-bold leading-5 justify-center items-stretch border border-solid border-[#000] mt-4 px-6 py-5 rounded-xl max-md:px-5">
                            <Image
                                width={20}
                                height={20}
                                alt="password"
                                loading="lazy"
                                className="animate-spin"
                                src="loaderIcon.svg"
                            />
                            processing
                        </div>
                    </div>
                ) : (
                    <div className="sm:px-4 px-0">
                        <button
                            type="submit"
                            className="text-white w-full text-center text-lg font-bold leading-5 justify-center items-stretch border border-solid border-[#000] mt-4 px-6 py-5 rounded-xl max-md:px-5"
                        >
                            Register
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default SignUpForm;
