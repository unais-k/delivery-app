import React from "react";
import { Button } from "@/components/modules/ui/Button";
import { Img } from "@/components/modules/ui/Image";
import { Input } from "@/components/modules/ui/Input";
import { Text } from "@/components/modules/ui/Text";

const LandingSection = () => {
    return (
        <>
            <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start md:flex-row w-full pb-[30px] bg-[#FFF7F1] pt-[100px] pl-16">
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                            className="md:text-[46px] leading-10 text-[36px] text-gray-900 tracking-[-0.08px]"
                            size="txtPoppinsExtraBold46"
                        >
                            Find a perfect property
                            <br />
                            Where you&#39;ll love to live
                        </Text>
                        <Text className="leading-[180.00%] max-w-[610px] text-gray-700 text-xl" size="txtPoppinsRegular20">
                            We helps businesses customize, automate and scale up their ad production and delivery.
                        </Text>
                    </div>
                    <div className="bg-white flex flex-col items-start justify-start p-8 sm:px-5 rounded-[16px] w-[80%]">
                        <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                            <div className="flex flex-col gap-6 items-start justify-start w-full">
                                <div className="flex flex-col gap-5 items-start justify-start w-full">
                                    <Input
                                        name=""
                                        placeholder="City/Street"
                                        className="font-semibold p-0  placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                                        wrapClassName="border border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                                        suffix={
                                            <Img
                                                width={500}
                                                height={500}
                                                className="mt-auto mb-[5px] h-5 w-5"
                                                src="images/img_location.svg"
                                                alt="location"
                                            />
                                        }
                                    ></Input>
                                    <Input
                                        name=""
                                        placeholder="Property Type"
                                        className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                                        wrapClassName="border border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                                        suffix={
                                            <Img
                                                width={500}
                                                height={500}
                                                className="mt-auto mb-[5px] h-5 w-5"
                                                src="images/img_sort.svg"
                                                alt="sort"
                                            />
                                        }
                                    ></Input>
                                    <Input
                                        name=""
                                        placeholder="Price Range"
                                        className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                                        wrapClassName="border border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                                        suffix={
                                            <Img
                                                width={500}
                                                height={500}
                                                className="mt-auto mb-[5px] h-5 w-5"
                                                src="images/img_sort.svg"
                                                alt="sort"
                                            />
                                        }
                                    ></Input>
                                </div>
                                <Button className="bg-gray-900 cursor-pointer font-bold py-4 px-7 rounded-[10px] text-center text-lg text-white w-fit">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:w-full">
                    <Img
                        width={500}
                        height={500}
                        className="h-[500px] md:h-auto object-cover w-full"
                        src="/House.png"
                        alt="image"
                    />
                </div>
            </div>
        </>
    );
};

export default LandingSection;
