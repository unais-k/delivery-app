import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { popularProductType } from "@/types/popularProductType";
import NewArrivalCard from "../../common/newArrivalCard";

const demiProductData: popularProductType[] = [
    {
        id: "1",
        productTitle: "Checkered Jacket",
        img: "/images/img_sportj9bzxuy.png",
        price: "$299",
    },
    {
        id: "2",
        productTitle: "Blue Woman Denim",
        img: "/images/img_shoesisolated.png",
        price: "$299",
    },
    {
        id: "3",
        productTitle: "Orange Jeans",
        img: "/images/img_placeholder_250X250.png",
        price: "$299",
    },
    {
        id: "4",
        productTitle: "Classic Watch",
        img: "/images/img_placeholder_6.png",
        price: "$299",
    },
];

const NewArrival: any = () => {
    return (
        <div className="flex md:flex-1 flex-col items-start justify-start lg:w-1/2 w-full">
            <Text className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800" size="txtPoppinsBold36">
                New Arrival
            </Text>
            <div className="flex flex-col items-center justify-start mt-[42px] w-full">
                <div className="md:gap-5 gap-[34px] grid md:grid-cols-2 grid-cols-1 justify-center min-h-[auto] w-full">
                    {demiProductData?.map((item) => {
                        return (
                            <NewArrivalCard
                                key={item?.id}
                                id={item?.id}
                                img={item?.img}
                                productTitle={item?.productTitle}
                                price={item?.price}
                                rating={item?.rating}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start mt-8 w-full">
                <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                    View all
                </Text>
                <Img className="h-[31px] w-8" src="images/img_menu.svg" alt="menu One" />
            </div>
        </div>
    );
};

export default NewArrival;
