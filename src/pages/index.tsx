import CustomerService from "@/components/modules/home/CustomerService";
import LandingSection from "@/components/modules/home/LandingSection";
import React from "react";
import { Button } from "@/components/modules/ui/Button";
import { FeatureCardPropList } from "@/constants/appConstants";
import FeatureCard from "@/components/modules/FeatureCard";
import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";

const HOME = () => {
    return (
        <div>
            <div className="flex flex-col font-poppins items-start justify-start w-full">
                <LandingSection />
            </div>
            <CustomerService />
            <div className="flex flex-col font-poppins items-center justify-center md:px-10 sm:px-5 p-[120px] w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                                size="txtPoppinsExtraBold36"
                            >
                                Featured Properties
                            </Text>
                            <Button
                                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center"
                                rightIcon={
                                    <Img
                                        width={500}
                                        height={500}
                                        className="h-6 w-fit mb-[3px] ml-2"
                                        src="/images/img_arrowright.svg"
                                        alt="arrow_right"
                                    />
                                }
                            >
                                <div className="font-bold text-left text-lg text-[#FD650B]">Explore All</div>
                            </Button>
                        </div>
                        <div className="flex font-urbanist flex-row gap-2.5 items-start justify-start w-full">
                            <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-center text-gray-900 text-lg">
                                Resident Property
                            </Button>
                            <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-center text-gray-400 text-lg">
                                Commercial Property
                            </Button>
                            <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-center text-gray-400 text-lg">
                                Industrial Property
                            </Button>
                            <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-center text-gray-400 text-lg">
                                Agriculture Property
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center min-h-[auto] w-full">
                            {FeatureCardPropList.map((props, index) => (
                                <React.Fragment key={`LandingPageCard${index}`}>
                                    <FeatureCard
                                        className="flex flex-1 flex-col h-full items-start justify-start w-full"
                                        {...props}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOME;
