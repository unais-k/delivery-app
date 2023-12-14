import Image from "next/image";
import React from "react";
import { closeIcon } from "../../../../public";
import OTPForm from "@/components/modules/authPage/OTPForm";

const index = () => {
    return (
        <div className="justify-center items-center bg-zinc-900 bg-opacity-80 flex w-full flex-col h-screen max-md:max-w-full">
            <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col px-8 py-10 rounded-xl border-solid border-zinc-300">
                <div className="items-stretch flex justify-between gap-2">
                    <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow shrink basis-auto">
                        OTP Verify
                    </div>
                    <Image
                        alt="close"
                        loading="lazy"
                        src={closeIcon}
                        className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>

                <OTPForm />
            </div>
        </div>
    );
};

export default index;
