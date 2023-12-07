import Image from "next/image";
import userIcon from "../../../public/userIcon.svg";

const page = () => {
    return (
        <div>
            <div className="justify-center items-center bg-zinc-900 bg-opacity-80 flex w-full flex-col max-md:max-w-full max-md:px-5">
                <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col mt-44 mb-32 px-8 py-10 rounded-xl border-solid border-zinc-300 max-md:my-10 max-md:px-5">
                    <div className="items-stretch flex justify-between gap-2">
                        <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow shrink basis-auto">
                            Log in
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ce0ba8c1dc66ad2bdd1558445e02db5211e62aad8deb925ae45706fd3b5c6a?apiKey=803caf35975f43cabf5312570cd77a07&"
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
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af286042825cc712b68dcf1b437ce45539579e1a12f569a2552988b6b844d01d?apiKey=803caf35975f43cabf5312570cd77a07&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                            <input
                                type="password"
                                placeholder="password"
                                className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                            />
                        </div>
                    </div>
                    <div className="justify-between items-stretch flex gap-2 mt-4">
                        <div className="items-stretch flex justify-between gap-2">
                            <div className="rounded flex w-[18px] shrink-0 h-[18px] flex-row gap-2">
                                <input type="checkbox" className="text-zinc-900 text-lg font-bold leading-5" />
                                <label htmlFor="">Remember</label>
                            </div>
                        </div>
                        <div className="text-zinc-900 text-right text-lg font-bold leading-5">Forgot Password</div>
                    </div>
                    <div className="text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-zinc-900 mt-8 px-6 py-5 rounded-xl max-md:px-5">
                        Log in
                    </div>
                    <div className="justify-center items-center border bg-white flex flex-col mt-5 px-16 py-5 rounded-xl border-solid border-neutral-500 max-md:px-5">
                        <div className="flex gap-2.5 items-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ffcb6e09bad8c1337ff5cdc39738b4a0ae275d15e4c5f5bb0c66406fb9c41c5?apiKey=803caf35975f43cabf5312570cd77a07&"
                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-zinc-900 text-lg font-bold leading-5 grow whitespace-nowrap mt-1">
                                Log in with Google
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/942bc3efd19154e12a6d0e3e1c559e5243be90c775f2c3f38ad538a124fc3b36?apiKey=803caf35975f43cabf5312570cd77a07&"
                        className="aspect-[420] object-contain object-center w-full fill-zinc-300 overflow-hidden mt-8"
                    />
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
        </div>
    );
};

export default page;
