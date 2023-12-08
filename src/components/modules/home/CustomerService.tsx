import React from "react";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Img } from "../ui/Image";
import { CustomerServiceConstants, CustomerTrustConstants } from "@/constants/appConstants";

const CustomerService = () => {
    return (
        <>
            <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[20px] w-full">
                <div className="grid md:grid-cols-1 xl:grid-cols-2 grid-cols-1 my-[80px] sm:my-[40px] gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
                    <div className="bg-[#FFE0CF] flex flex-1 flex-col h-fit md:h-auto items-start justify-center md:px-10 sm:px-5 px-[50px] py-[46px] rounded-[20px] w-full">
                        <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <Text
                                    className="leading-[140.00%] max-w-[488px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                                    size="txtPoppinsExtraBold36"
                                >
                                    Simple & easy way to find your dream Appointment
                                </Text>
                                <Text
                                    className="leading-[180.00%] max-w-[488px] md:max-w-full text-gray-900 text-lg"
                                    size="txtPoppinsRegular18"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>
                            </div>
                            <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white">
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="sm:gap-5 gap-6 grid grid-cols-1 sm:grid-cols-2 justify-center min-h-[auto] w-full">
                            {CustomerServiceConstants.map((item, i) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="bg-[#FCEEE6] flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full"
                                    >
                                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                                            <Img
                                                width={500}
                                                height={500}
                                                className="h-[30px] w-[30px]"
                                                src={item.img}
                                                alt={item.alt}
                                            />
                                            <Text
                                                className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                                                size="txtPoppinsExtraBold28"
                                            >
                                                <>{item.title}</>
                                            </Text>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FFF7F1] flex flex-col font-poppins items-center justify-center sm:px-20 px-[80px] py-[50px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mx-auto w-full">
                    <div className="md:flex-1 sm:flex-col flex-row gap-10  grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
                        {CustomerTrustConstants.map((item, i) => {
                            return (
                                <div key={item.id} className="flex flex-col gap-[18px] items-start justify-start w-full">
                                    <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                                        <Img width={500} height={500} className="h-8" src={item.img} alt={item.alt} />
                                    </Button>
                                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                        <Text
                                            className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                                            size="txtPoppinsExtraBold46"
                                        >
                                            {item.amt}
                                        </Text>
                                        <Text
                                            className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                                            size="txtPoppinsSemiBold20"
                                        >
                                            <>{item.title}</>
                                        </Text>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerService;
