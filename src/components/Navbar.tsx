import React from "react";
<<<<<<< HEAD
import { Text } from "./modules/ui/Text";
import { Img } from "./modules/ui/Image";
import { Button } from "./modules/ui/Button";
import { IoIosArrowDown } from "react-icons/io";

type LandingPageHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;


const Navbar: React.FC<LandingPageHeaderProps> = (props) => {
    return (
<<<<<<< HEAD
        <>
            <header
                className={`${props.className}flex justify-center bg-white z-50 fixed shadow-md h-[80px] items-center w-full `}
            >
                <div className="flex flex-row items-center justify-between h-full sm:px-16 px-6">
                    <div className="header-row my-px">
                        <div className="flex flex-row gap-[11px] justify-start">
                            <Img className="" src="LogoImage.svg" alt="home" width={40} height={40} />
                            <Text className="text-[#FD650B] pt-3.5 text-xl w-auto" size="txtPoppinsExtraBold46">
                                Delivery
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-10 font-[500] ">
                            <div className="flex flex-row  items-start justify-start ">
                                <Text className="text-base pe-1 text-gray-900 w-auto" size="txtPoppinsMedium16">
                                    Home
                                </Text>
                                <IoIosArrowDown size={22} className="pt-1" />
                            </div>
                            <div className="flex flex-row  items-start justify-start ">
                                <Text className="text-base pe-1 text-gray-900 w-auto" size="txtPoppinsMedium16">
                                    Listing
                                </Text>
                                <IoIosArrowDown size={22} className="pt-1" />
                            </div>

                            <div className="flex flex-row  items-start justify-start ">
                                <Text className="text-base pe-1 text-gray-900 w-auto" size="txtPoppinsMedium16">
                                    Agents
                                </Text>
                                <IoIosArrowDown size={22} className="pt-1" />
                            </div>
                            <Text className="text-base text-center text-gray-900 w-auto" size="txtPoppinsMedium16">
                                Property
                            </Text>
                            <Text className="text-base text-gray-900 w-auto" size="txtPoppinsMedium16">
                                Blog
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 items-center justify-between">
                        <Button
                            leftIcon={<Img src="searchIcon.svg" alt="search icon" height={20} width={20} />}
                            className="bg-transparent cursor-pointer border border-solid border-black py-3 px-7 rounded-md shadow-md flex items-center justify-center"
                        >
                            <div className="font-semibold font-poppins ps-3 text-gray-900 text-left text-lg">Search</div>
                        </Button>
                        <Button className="bg-slate-700 cursor-pointer font-poppins font-semibold py-3 shadow-md px-7 rounded-md text-base text-center text-white">
                            Log in
                        </Button>
=======
        <div className="justify-center items-center h-fit bg-white flex w-full flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
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
                    <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-6 py-3.5 rounded-xl max-md:px-5">
                        Log in
>>>>>>> cff0a9e8e0c71b10a6adf87787b5fb974fdadb4e
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
