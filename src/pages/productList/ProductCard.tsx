import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { ProductType } from "@/types/popularProductType";
import Image from "next/image";
import { productBackgroundImage } from "../../../public";

const ProductListingCard = (product: ProductType) => {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full bg-gray-200">
                <div
                    className="relative w-full bg-gradient-to-r from-stone-200 to-zinc-50 border-2 border-[#000] h-[370px]"
                >
                    <Image
                        height={500}
                        width={500}
                        quality={100}
                        style={{ objectFit: "contain" }}
                        className="h-[100%] w-[100%] absolute z-20 cursor-pointer"
                        src={product?.images[0]}
                        alt={product?.title}
                    />
                </div>
                <div className="flex flex-col ps-3 gap-2 items-start justify-start w-full">
                    <Text className="text-sm text-center text-gray-800" size="txtPoppinsMedium24">
                        {product?.title}
                    </Text>
                    <Text className="text-[#000] text-sm" size="txtPoppinsMedium18Gray500">
                        $ {product?.price}
                    </Text>
                </div>
            </div>
        </>
    );
};

export default ProductListingCard;
