import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { Button } from "@/components/modules/ui/Button";
import { Line } from "@/components/modules/ui/Line";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "@/lib/slices/cartSlice";
import { ProductType } from "@/types/popularProductType";
import { Input } from "@/components/modules/ui/Input";
type Props={
   product: ProductType
   unit:Number 
}

const SmallCartCard: React.FC<Props> = ({product}) => {


    const { images, price,quantity } = product;


    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-start justify-start">
            <div className="p-3">
                <div className="flex flex-row justify-start items-center h-[150px] gap-x-5">
                    {/* img div */}
                    <div className=" h-[130px] px-5 relative w-[150px]">
                        <Img
                            className="absolute h-[130px] inset-[0] justify-center m-auto object-cover w-[130px]"
                            src={images[0]}
                            alt="placeholder"
                        />
                    </div>
                    {/* product details */}
                    <div className="relative h-full w-fit px-2">
                        {/* <div className="text-[20px] leading-7 my-2 font-[200] font-raleway">{title} </div> */}
                        <div className="text-[18px] leading-7 my-2 font-[300] font-raleway capitalize">product name</div>
                        <div className="font-urbanist text-base my-2 text-slate-600">Size</div>
                        <div className="font-urbanist text-base my-2 text-slate-600">Qty {quantity}</div>
                        <div className="font-urbanist text-base my-2 text-slate-600">INR {price}.00</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallCartCard;
