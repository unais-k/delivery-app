import { Text } from "@/components/modules/ui/Text";
import { Button } from "@/components/modules/ui/Button";
import { Img } from "@/components/modules/ui/Image";
import { List } from "@/components/modules/ui/List";
import OfferCard from "./OfferCard";
import { limitedOfferProductType } from "@/types/popularProductType";

const offerCardData: limitedOfferProductType[] = [
    {
        id: 1,
        productName: "Black Warm Jacket",
        img: "/images/img_rectangle45.png",
        price: "$299",
        offerPrice: "$199",
    },
    {
        id: 2,
        productName: "Casual Grey Shoes",
        img: "/images/img_placeholder_4.png",
        price: "$399",
        offerPrice: "$199",
    },
];

const LimitedOffer = () => {
    return (
        <div className="h-[1628px] md:h-[535px]  relative w-full">
            <div className="absolute bg-[#fff] h-full flex flex-col inset-x-[0] items-start justify-start mx-auto md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex flex-col items-center justify-start  md:ml-[0] ml-[91px]">
                    <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtPoppinsBold36WhiteA700"
                    >
                        Limited Offer
                    </Text>
                </div>
            </div>
            <List
                className="absolute bottom-[0] gap-8 grid grid-cols-1 md:grid-cols-2 inset-x-[0] justify-center mx-auto w-[90%]"
                orientation="horizontal"
            >
                {offerCardData?.map((item, i) => {
                    return (
                        <OfferCard
                            key={item?.id}
                            id={item?.id}
                            img={item?.img}
                            productName={item?.productName}
                            price={item?.price}
                            offerPrice={item?.offerPrice}
                        />
                    );
                })}
            </List>
        </div>
    );
};

export default LimitedOffer;
