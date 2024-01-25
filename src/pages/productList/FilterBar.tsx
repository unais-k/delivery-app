import { Button } from "@/components/modules/ui/Button"
import { Img } from "@/components/modules/ui/Image"
import { Line } from "@/components/modules/ui/Line"
import { List } from "@/components/modules/ui/List"
import { RatingBar } from "@/components/modules/ui/RatingBar"
import { Text } from "@/components/modules/ui/Text"
import Checkbox from "rc-checkbox"

const FilterBar = () => {
  return (
    <><div className="flex md:flex-none flex-col items-start justify-start pt-1.5 w-[16%] ">
    <div className="flex flex-col gap-[31px] items-start justify-start w-full">
        <div className="flex flex-col gap-8 items-start justify-start w-full">
            <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                Categories
            </Text>
            <Line className="bg-bluegray-100 h-px w-full" />
        </div>
        <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_cut_32X32.svg" alt="cut" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Jacket
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_file.svg" alt="file" />
                <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsRegular18">
                    Shirt
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_location_32X32.svg" alt="location" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Pants
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_computer_32X32.svg" alt="computer" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Shoes
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_settings_32X32.svg" alt="settings" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Dress
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_signal_32X32.svg" alt="signal" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Accesories
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_skirt_32X32.svg" alt="Skirt" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    Skirt
                </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img className="h-6 w-6" src="images/img_arrowdown_gray_500.svg" alt="arrowdown" />
                <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                    View more
                </Text>
            </div>
        </div>
    </div>
    <Line className="bg-bluegray-100 h-px mt-8 w-full" />
    <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[68%] md:w-full">
        <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
            Filter by Price
        </Text>
        <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Checkbox />

            <div className="flex flex-row gap-4 items-center justify-start w-[87%] md:w-full">
                <Button
                    className="flex h-6 items-center justify-center w-6"
                    shape="square"
                    color="gray_800"
                    size="xs"
                    variant="fill"
                >
                    <Img src="images/img_checkedbox.svg" alt="Checkedbox" />
                </Button>
                <Text className="text-gray-800 text-lg" size="txtPoppinsRegular18">
                    $100 - $250
                </Text>
            </div>
            <Checkbox />
            <Checkbox />
            <Checkbox />
        </div>
    </div>
    <Line className="bg-bluegray-100 h-px mt-8 w-full" />
    <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[79%] md:w-full">
        <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
            Filter by Rating
        </Text>
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-row gap-4 items-center justify-start w-[34%] md:w-full">
                <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                <Img className="h-6 w-6" src="images/img_star1_3.svg" alt="StarOne" />
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-1/2 md:w-full">
                <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img className="h-6 w-6" src="images/img_star1_4.svg" alt="StarOne One" />
                    <Img className="h-6 w-6" src="images/img_star2_2.svg" alt="StarTwo" />
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-[67%] md:w-full">
                <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img className="h-6 w-6" src="images/img_star1_5.svg" alt="StarOne Two" />
                    <Img className="h-6 w-6" src="images/img_star2_3.svg" alt="StarTwo One" />
                    <Img className="h-6 w-6" src="images/img_star3_1.svg" alt="StarThree" />
                </div>
            </div>
            <List className="flex flex-col gap-4 items-center w-full" orientation="vertical">
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-start w-[84%] md:w-full">
                    <Button
                        className="flex h-6 items-center justify-center w-6"
                        shape="square"
                        color="gray_800"
                        size="xs"
                        variant="fill"
                    >
                        <Img src="images/img_checkedbox.svg" alt="Checkedbox One" />
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img className="h-6 w-6" src="images/img_star1_6.svg" alt="StarOne Three" />
                        <Img className="h-6 w-6" src="images/img_star2_4.svg" alt="StarTwo Two" />
                        <Img className="h-6 w-6" src="images/img_star3_2.svg" alt="StarThree One" />
                        <Img className="h-6 w-6" src="images/img_star5_24X24.svg" alt="StarFive" />
                    </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-between w-full">
                    <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                    <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                            className="flex justify-between w-[152px]"
                            value={5}
                            starCount={5}
                            activeColor="#fae952"
                            size={24}
                        ></RatingBar>
                    </div>
                </div>
            </List>
        </div>
    </div>
</div></>
  )
}

export default FilterBar