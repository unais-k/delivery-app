import React, { useEffect } from "react";
import { Button } from "./modules/ui/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { selectUser } from "@/lib/slices/userSlice";
import { useSelector } from "react-redux";
import Header from "./Header";
import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { Input } from "@/components/modules/ui/Input";
import { Line } from "@/components/modules/ui/Line";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import Link from "next/link";

type LandingPageHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Navbar: React.FC<LandingPageHeaderProps> = (props) => {
    const user = useSelector(selectUser);
    const router = useRouter();

    return (
        <>
            <header className={`flex justify-center bg-white items-center w-full `}>
                <div className="flex flex-col w-full py-5 sm:px-16 px-3">
                    {/* navbar */}
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div
                            className="flex flex-row gap-2 cursor-pointer"
                            onClick={() =>
                                router.push(
                                    {pathname: "/"},
                                    undefined,
                                    { shallow: true }
                                )
                            }
                        >
                            <Img className="h-6 w-[35%]" src="images/img_volume.svg" alt="volume" />
                            <Text
                                className="text-2xl whitespace-nowrap md:text-[22px] text-gray-800 sm:text-xl"
                                size="txtPoppinsBold24"
                            >
                                Element
                            </Text>
                        </div>
                        {/* search */}
                        {/* <div className="md:block hidden">
                            <div className="border border-solid justify-between rounded-md border-gray-200 flex flex-row w-72">
                                <Input
                                    type="text"
                                    className="outline-none placeholder:ps-3 ps-3 py-3 placeholder:text-gray-300 placeholder:text-[18px] placeholder:font-medium"
                                    placeholder="Search here"
                                />
                                <span className="h-12 w-12 rounded-r-md bg-[#393D46] flex justify-center items-center">
                                    <BiSearch size={25} color={"white"} />
                                </span>
                            </div>
                        </div> */}
                        {/* cart and login */}
                        <div className="flex flex-row gap-x-3 items-center justify-between">
                            <BiSearch size={25} color={"black"} />
                            <MdOutlineShoppingCart onClick={() => router.push(
                                    {pathname: "/cart"},
                                    undefined,
                                    { shallow: true }
                                )} size={25} color={"black"} />
                            <Link href="/wishlist">
                            <GoHeart size={25} color={"black"} />
                            </Link>
                            <Text
                                onClick={() => router.push("/auth")}
                                size="txtPoppinsBold24"
                                className="cursor-pointer font-bold leading-[normal] text-center text-sm px-3"
                            >
                                Login
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5 ">
                        <Line className="bg-gray-200 h-px w-full" />
                    </div>
                    {/* nav items */}
                    <div className="flex flex-row md:gap-10 gap-20 items-center justify-center mt-[25px] w-full">
                        <Text className="text-gray-800 text-lg w-auto btn" size="txtPoppinsRegular18">
                            Categories
                        </Text>
                        <Text className="text-gray-800 text-lg w-auto btn" size="txtPoppinsRegular18">
                            New Arrival
                        </Text>
                        <Text className="text-gray-800 text-lg w-auto btn" size="txtPoppinsRegular18">
                            Features
                        </Text>
                        <Text className="text-gray-800 text-lg w-auto btn" size="txtPoppinsRegular18">
                            Collections
                        </Text>
                        <Text className="text-gray-800 text-lg w-auto btn" size="txtPoppinsRegular18">
                            Discount
                        </Text>
                    </div>
                </div>
                {/* <div className="flex flex-row items-center justify-between h-full sm:px-16 px-6">
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
                                   xxx
                                </Text>
                                <IoIosArrowDown size={22} className="pt-1" />
                            </div>
                            <div
                           
                            className="flex flex-row  items-start justify-start">
                                <Text
                                 className="text-base pe-1 text-gray-900 w-auto" size="txtPoppinsMedium16">
                                    List
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
                       { user.fullName?<Button
              
                            className="bg-slate-700 cursor-pointer font-poppins font-semibold py-3 shadow-md px-7 rounded-md text-base text-center text-white"
                        >
                            Log out
                        </Button>
                        :
                        <Button
                        onClick={() => router.push("/auth")}
                            className="bg-slate-700 cursor-pointer font-poppins font-semibold py-3 shadow-md px-7 rounded-md text-base text-center text-white"
                        >
                           Log in
                        </Button>}
                    </div>
                </div> */}
            </header>
        </>
    );
};

export default Navbar;
