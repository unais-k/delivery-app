const OTPForm = () => {
    return (
        <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col mt-52 mb-40 px-8 py-10 rounded-xl border-solid border-zinc-300 max-md:my-10 max-md:px-5">
            <div className="items-stretch flex justify-between gap-2">
                <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow whitespace-nowrap">
                    Enter OTP
                </div>
            </div>
            <div className="text-zinc-900 text-lg leading-8 whitespace-nowrap mt-2">
                Please check your phone, We sent an OTP code
            </div>
            <div className="items-stretch flex gap-3 mt-6 pr-20 max-md:pr-5">
                <input className="text-zinc-900 text-lg font-bold leading-5 whitespace-nowrap items-center border aspect-square justify-center h-[60px] px-6 rounded-xl border-solid border-neutral-500 max-md:px-5" />

                <input className="text-zinc-900 text-lg font-bold leading-5 whitespace-nowrap items-center border aspect-square justify-center h-[60px] px-6 rounded-xl border-solid border-neutral-500 max-md:px-5" />

                <input className="text-zinc-900 text-lg font-bold leading-5 whitespace-nowrap items-center border aspect-square justify-center h-[60px] px-6 rounded-xl border-solid border-neutral-500 max-md:px-5" />

                <input className="text-zinc-900 text-lg font-bold leading-5 whitespace-nowrap items-center border aspect-square justify-center h-[60px] px-6 rounded-xl border-solid border-neutral-500 max-md:px-5" />
            </div>
            <div className="text-white text-center text-lg font-bold leading-5 whitespace-nowrap justify-center items-stretch bg-zinc-900 mt-8 px-6 py-5 rounded-xl max-md:px-5">
                Confirm
            </div>
            <div className="text-zinc-900 text-lg font-bold leading-5 whitespace-nowrap justify-center items-center border bg-white mt-5 px-16 py-5 rounded-xl border-solid border-neutral-500 max-md:px-5">
                Request OTP Again
            </div>

            <div className="justify-between items-stretch flex gap-2 mt-8 px-14 max-md:px-5">
                <div className="text-neutral-500 text-center text-xl font-semibold leading-7 tracking-tight whitespace-nowrap">
                    Remember the Password?
                </div>
                <div className="text-zinc-900 text-xl font-semibold leading-7 tracking-tight whitespace-nowrap">Log in</div>
            </div>
        </div>
    );
};

export default OTPForm;
