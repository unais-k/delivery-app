import { useEffect, useState } from "react";
import Image from "next/image";
import { passwordIcon } from "../../../../public";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const SignInForm = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleFormData = () => {};
    return (
        <>
            <form>
                <div className="items-stretch  bg-white flex flex-col justify-center mt-3 px-4 py-3.5 rounded-xl">
                    <div className="items-center flex justify-between gap-3.5">
                        <PhoneInput
                            country={"in"}
                            inputStyle={{ width: "100%" }}
                            value={phone}
                            onChange={(e) => setPhone(e)}
                        />
                        {/* <input
                        type="text"
                        placeholder="phone"
                        className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                    /> */}
                    </div>
                </div>
                <div className="items-stretch bg-white flex flex-col justify-center px-4  mt-3">
                    <div className="items-center border flex justify-between gap-3.5 px-4 py-3.5  rounded-md border-solid border-gray-300">
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
                            className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                        />
                    </div>
                </div>
                <div className="text-zinc-900 text-right text-lg font-bold leading-5 mt-4">Forgot Password</div>

                <button
                    type="submit"
                    className="text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-zinc-900 mt-4 px-6 py-5 rounded-xl max-md:px-5"
                >
                    Log in
                </button>
            </form>
        </>
    );
};

export default SignInForm;
