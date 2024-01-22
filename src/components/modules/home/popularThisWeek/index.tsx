import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";
import { RatingBar } from "@/components/modules/ui/RatingBar";
import { popularProductType } from "@/types/popularProductType";
import NewArrivalCard from "../../common/newArrivalCard";

const demiProductData: popularProductType[] = [
    {
        id: "1",
        productTitle: "Blue Jeans",
        img: "/images/img_placeholder_3.png",
        price: "$299",
        rating:"4"
    },
    {
        id: "2",
        productTitle: "Wristwatch",
        img: "/images/img_placeholder_5.png",
        price: "$299",
        rating:"4"
    },
    {
        id: "3",
        productTitle: "Elegant Jacket",
        img: "/images/img_placeholder_177X177.png",
        price: "$299",
        rating:"4"
    },
    {
        id: "4",
        productTitle: "Gray Watch",
        img: "/images/img_placeholder_4.png",
        price: "$299",
        rating:"4"
    },
];



const PopularThisWeek = () => {
    return (
        <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-full">
            <Text className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800" size="txtPoppinsBold36">
                Popular This Week
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[34px] grid md:grid-cols-3  grid-cols-1 justify-center min-h-[auto] w-full">
                    {
                        demiProductData?.map((item) => {
                            return (
                                <NewArrivalCard key={item?.id}
                                id={item?.id}
                                img={item?.img}
                                productTitle={item?.productTitle}
                                price={item?.price}
                                rating={item?.rating}/>
                            )
                        })
                    }
                    
                    
                    
                    
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] w-full">
                <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                    View all
                </Text>
                <Img className="h-[31px] w-8" src="images/img_menu.svg" alt="menu Two" />
            </div>
        </div>
    );
};

export default PopularThisWeek;
