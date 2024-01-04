import { Button } from "@/components/modules/ui/Button";
import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { limitedOfferProductType } from "@/types/popularProductType";
import React from "react";

const OfferCard:React.FC<limitedOfferProductType> = ({id,price,productName,offerPrice,img}) => {
    return (
        <div className="bg-gray-50 flex flex-col md:flex-row gap-5 items-center justify-start sm:ml-[0] p-8 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[38%] md:w-full">
                <Img
                    className="h-[279px] md:h-auto object-cover w-[279px]"
                    src={img}
                    alt="RectangleFortyFive"
                />
                <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] text-center text-lg w-[200px]"
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                >
                    Add to Cart
                </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                    <Text className="text-2xl md:text-[22px] text-gray-800 sm:text-xl" size="txtPoppinsRegular24">
                        Limited Deals
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between mt-[31px] w-full">
                        <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-end p-[22px] sm:px-5 w-[107px]">
                            <div className="flex flex-col gap-[19px] items-center justify-start">
                                <Text
                                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                    size="txtPoppinsMedium24"
                                >
                                    08
                                </Text>
                                <Text className="text-gray-800 text-lg" size="txtPoppinsRegular18">
                                    Hours
                                </Text>
                            </div>
                        </div>
                        <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[18px] w-[107px]">
                            <div className="flex flex-col gap-[18px] items-center justify-start my-1">
                                <Text
                                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                    size="txtPoppinsMedium24"
                                >
                                    58
                                </Text>
                                <Text className="text-gray-800 text-lg" size="txtPoppinsRegular18">
                                    Minutes
                                </Text>
                            </div>
                        </div>
                        <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-3.5 w-[107px]">
                            <div className="flex flex-col gap-[19px] items-center justify-start my-2">
                                <Text
                                    className="h-6 text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                    size="txtPoppinsMedium24"
                                >
                                    18
                                </Text>
                                <Text className="text-gray-800 text-lg" size="txtPoppinsRegular18">
                                    Seconds
                                </Text>
                            </div>
                        </div>
                    </div>
                    <Text className="mt-[29px] text-2xl md:text-[22px] text-gray-800 sm:text-xl" size="txtPoppinsBold24">
                        {productName}
                    </Text>
                    <div className="flex flex-row gap-6 items-center justify-start mt-[22px] w-[36%] md:w-full">
                        <Text
                            className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                            size="txtPoppinsRegular24Gray500"
                        >
                            {price}
                        </Text>
                        <Text className="text-2xl md:text-[22px] text-gray-800 sm:text-xl" size="txtPoppinsMedium24">
                            {offerPrice}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
