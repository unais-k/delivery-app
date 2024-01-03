import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { popularProductType } from "@/types/popularProductType";
import { RatingBar } from "@/components/modules/ui/RatingBar";
const NewArrivalCard: React.FC<popularProductType> = ({ img, productTitle, price, rating, id }) => {
    return (
        <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
            <Img className="h-[107px] md:h-auto object-cover w-[107px]" src={img} alt="placeholder" />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto" size="txtPoppinsMedium24">
                    {productTitle}
                </Text>
                <Text className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto" size="txtPoppinsMedium24Gray500">
                    {price}
                </Text>
                {rating ? (
                    <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                            className="flex justify-between w-28"
                            value={4}
                            starCount={5}
                            color="#f6f7fb"
                            activeColor="#fae952"
                            size={16}
                        ></RatingBar>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default NewArrivalCard;
