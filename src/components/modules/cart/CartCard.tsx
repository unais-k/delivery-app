import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { Button } from "@/components/modules/ui/Button";
import { Line } from "@/components/modules/ui/Line";
import { useDispatch } from "react-redux";
import { decrementQuantity,incrementQuantity,removeItem } from "@/lib/slices/cartSlice";
import { ProductType } from "@/types/popularProductType";

const CartCard:React.FC<ProductType> = ({ _id,images, price, title, quantity }) => {

    const dispatch = useDispatch()    

    return (
        <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-col gap-5 item-center justify-start">
                    <div className="border border-bluegray-100 border-solid h-[180px] p-6 sm:px-5 relative w-[200px]">
                        <Img
                            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[180px]"
                            src={images[0]}
                            alt="placeholder"
                        />
                    </div>
                    <Text className="font-medium sm:text-2xl md:text-[22px] text-gray-800 text-xl">
                        {title}
                    </Text>
                </div>
                <div className="h-12 flex flex-row justify-between item-center border border-solid border-gray-200 rounded-md relative w-[11%]">
                    <button onClick={()=>dispatch(decrementQuantity(_id))} className="bg-gray-200 flex flex-col h-full rounded-l-md items-center justify-center my-auto w-12">
                        <div className="bg-gray-800 h-1 w-[37%]"></div>
                    </button>
                    <Button className="cursor-pointer font-medium h-full leading-normal text-center text-gray-800 text-lg">
                        {quantity}
                    </Button>
                    <Button onClick={()=>dispatch(incrementQuantity(_id))} className=" bg-gray-800 rounded-r-md flex h-12 inset-y-[0] items-center justify-center right-0 w-12">
                        <Img
                            className="h-4"
                            src="images/img_grid.svg"
                            alt="grid"
                        />
                    </Button>
                </div>
                <Text className="font-medium md:ml-[0] ml-[139px] text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                    ${price}
                </Text>
                <Text className="font-medium md:ml-[0] ml-[186px] text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                    ${Number(price) * Number(quantity)}
                </Text>
                <Img
                    className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                    onClick={()=>dispatch(removeItem(_id))}
                    src="images/img_close.svg"
                    alt="close"
                />
            </div>
            <Line className="bg-bluegray-100 h-px w-full" />
        </div>
    );
};

export default CartCard;
