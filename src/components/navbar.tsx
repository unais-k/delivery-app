import React, { useEffect } from "react";
import { Text } from "./modules/ui/Text";
import { Img } from "./modules/ui/Image";
import { Button } from "./modules/ui/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { selectUser } from "@/lib/slices/userSlice";
import { useSelector } from "react-redux";


type LandingPageHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Navbar: React.FC<LandingPageHeaderProps> = (props) => {
    const user = useSelector(selectUser);
    const router = useRouter();


  
    return (
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
                </div>
            </header>
        </>
    );
};

export default Navbar;
