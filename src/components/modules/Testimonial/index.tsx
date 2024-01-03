"use client";
import { List } from "@/components/modules/ui/List";
import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";

const Testimonial = () => {
    return (
        <List
            className="bg-gray-50 sm:flex-col lg:flex lg:flex-row gap-8 grid grid-cols-1 md:grid-cols-2 justify-center mt-[100px] md:px-10 px-5 sm:px-5 w-full"
        >
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
                <Img className="h-12 w-12" src="images/img_music.svg" alt="music" />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsBold18">
                        Free Delivery
                    </Text>
                    <Text className="text-gray-500 text-lg" size="txtPoppinsRegular18Gray500">
                        <>
                            This free shipping
                            <br />
                            only for selected region
                        </>
                    </Text>
                </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
                <Img className="h-12 w-12" src="images/img_computer.svg" alt="computer" />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsBold18">
                        Payment Method
                    </Text>
                    <Text className="text-gray-500 text-lg" size="txtPoppinsRegular18Gray500">
                        <>
                            This free shipping
                            <br />
                            only for selected region
                        </>
                    </Text>
                </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
                <Img className="h-12 w-12" src="images/img_clock.svg" alt="clock" />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsBold18">
                        Warranty
                    </Text>
                    <Text className="text-gray-500 text-lg" size="txtPoppinsRegular18Gray500">
                        <>
                            This free shipping
                            <br />
                            only for selected region
                        </>
                    </Text>
                </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
                <Img className="h-12 w-12" src="images/img_music_65X65.svg" alt="music One" />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsBold18">
                        Customer Support
                    </Text>
                    <Text className="text-gray-500 text-lg" size="txtPoppinsRegular18Gray500">
                        <>
                            This free shipping
                            <br />
                            only for selected region
                        </>
                    </Text>
                </div>
            </div>
        </List>
    );
};

export default Testimonial;
