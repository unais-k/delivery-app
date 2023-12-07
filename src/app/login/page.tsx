import Image from "next/image";
import { closeIcon, passwordIcon, userIcon } from "../../../public";
import { FaGoogle } from "react-icons/fa";

const page = () => {
    return (
        <div className="justify-center items-center bg-zinc-900 bg-opacity-80 flex w-full flex-col max-md:max-w-full">
            <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col mt-44 mb-32 px-8 py-10 rounded-xl border-solid border-zinc-300 max-md:my-10 max-md:px-5">
                <div className="items-stretch flex justify-between gap-2">
                    <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow shrink basis-auto">
                        Log in
                    </div>
                    <Image
                        alt="close"
                        loading="lazy"
                        src={closeIcon}
                        className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="items-stretch border bg-white flex flex-col justify-center mt-6 px-4 py-3.5 rounded-xl border-solid border-zinc-300">
                    <div className="items-center flex justify-between gap-3.5">
                        <Image
                            alt="user-icon"
                            loading="lazy"
                            src={userIcon}
                            className="aspect-square object-contain object-center w-6 overflow-hidden  max-w-full my-auto"
                        />
                        <input
                            type="text"
                            placeholder="email address"
                            className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                        />
                    </div>
                </div>
                <div className="items-stretch border bg-white flex flex-col justify-center mt-3 px-4 py-3.5 rounded-xl border-solid border-zinc-300">
                    <div className="items-stretch flex gap-3.5 max-md:justify-center">
                        <Image
                            alt="password"
                            loading="lazy"
                            src={passwordIcon}
                            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                        />
                    </div>
                </div>
                <div className="text-zinc-900 text-right text-lg font-bold leading-5 mt-4">Forgot Password</div>

                <button
                    type="submit"
                    className="text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-zinc-900 mt-8 px-6 py-5 rounded-xl max-md:px-5"
                >
                    Log in
                </button>
                <div className="justify-center items-center border bg-white flex flex-col mt-5 px-16 py-5 rounded-xl border-solid border-neutral-500 max-md:px-5">
                    <div className="flex gap-2.5 items-start">
                        <FaGoogle />
                        <div className="text-zinc-900 text-lg font-bold leading-5 grow whitespace-nowrap mt-1">
                            Log in with Google
                        </div>
                    </div>
                </div>

                <div className="justify-between items-stretch flex gap-2 mt-8 px-7 max-md:px-5">
                    <div className="text-neutral-500 text-center text-xl font-semibold leading-7 tracking-tight whitespace-nowrap">
                        Don’t have an account?
                    </div>
                    <div className="text-zinc-900 text-xl font-semibold leading-7 tracking-tight whitespace-nowrap">
                        Create Account
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
