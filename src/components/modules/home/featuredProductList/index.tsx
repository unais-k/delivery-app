import { ProductType } from "@/types/popularProductType";
import { Img } from "../../ui/Image";
import { Text } from "../../ui/Text";
import { useRouter } from "next/router";

const FeaturedProductListCard = (props: ProductType) => {
    const router = useRouter();
    return (
        <div
            className="flex flex-1 flex-col gap-4 border-2 border-[#000] items-center justify-start my-10 pb-1 w-full"
            onClick={() => router.push("/productList")}
        >
            <Img className="h-[345px] md:h-auto object-cover w-[345px]" src={props?.images[0]} alt="RectangleThirtyNine" />
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Text className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl" size="txtPoppinsMedium24">
                    <>{props?.title}</>
                </Text>
            </div>
        </div>
    );
};

export default FeaturedProductListCard;
