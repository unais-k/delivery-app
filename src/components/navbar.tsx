import React from "react";
import LoginButton from "./LoginButton"


const Navbar = () => {
    return (
        <div className="justify-center items-center self-stretch bg-white flex w-full flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
            <div className="justify-between flex w-full max-w-[1200px] gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-stretch flex gap-3">
                    <div className="text-orange-500 text-xl leading-9 self-center grow whitespace-nowrap my-auto">
                        Relasto
                    </div>
                </div>
                <div className="justify-between items-stretch self-center flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="items-stretch flex justify-between gap-1.5 pr-2.5">
                        <div className="text-zinc-900 text-base font-semibold leading-4 grow whitespace-nowrap">Home</div>
                    </div>
                    <div className="items-stretch flex justify-between gap-1.5 px-0.5">
                        <div className="text-zinc-900 text-base font-semibold leading-4 grow whitespace-nowrap">
                            Listing
                        </div>
                    </div>
                    <div className="items-stretch flex justify-between gap-1.5">
                        <div className="text-zinc-900 text-base font-semibold leading-4 grow whitespace-nowrap">Agents</div>
                    </div>
                    <div className="text-zinc-900 text-center text-base font-semibold leading-4">Property </div>
                    <div className="text-zinc-900 text-base font-semibold leading-4 whitespace-nowrap">Blog</div>
                </div>
                <div className="items-center self-stretch flex justify-between gap-5">
                    <div className="items-stretch flex gap-2 my-auto">
                        <div className="text-zinc-900 text-lg font-bold leading-5 self-center grow whitespace-nowrap my-auto">
                            Search
                        </div>
                    </div>

                    
<LoginButton/>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;
