import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { Button } from "@/components/modules/ui/Button";
import { Line } from "@/components/modules/ui/Line";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "@/lib/slices/cartSlice";
import { ProductType } from "@/types/popularProductType";
import { Input } from "@/components/modules/ui/Input";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/slices/userSlice";
type CartWithUserType = {
    _id: string; 
    userId: string;
  };
  

const CartCard: React.FC = ({ product }:any) => {


    const userId=useSelector(selectUser)._id
    const{   _id, images, price, title, quantity}=product
    const cartWithUser:CartWithUserType ={
        _id,
        userId
    } 
    const dispatch = useDispatch();

    return (
        <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="md:p-5 p-3 border border-solid">
                <div className="flex flex-row justify-start items-center h-[200px] gap-x-5">
                    {/* img div */}
                    <div className=" h-[180px] p-6 sm:px-5 relative w-[200px]">
                        <Img
                            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[130px]"
                            src={images[0]}
                            alt="placeholder"
                        />
                    </div>
                    {/* product details */}
                    <div className="relative h-full w-[400px]">
                        {/* <div className="text-[20px] leading-7 my-2 font-[200] font-raleway">{title} </div> */}
                        <div className="text-[20px] leading-7 my-2 font-[300] font-raleway capitalize">product name</div>
                        <div className="font-urbanist text-base my-2 text-slate-600">Size</div>
                        <div className="h-fit flex flex-row justify-between gap-2 item-center w-20 shadow-sm py-1 px-2 border border-solid border-bluegray-100">
                            <div
                                className="h-6 w-6 text-lg font-medium text-center hover:bg-slate-100 flex justify-center items-center cursor-pointer"
                                onClick={() => dispatch(decrementQuantity(cartWithUser))}
                            >
                                -
                            </div>
                            <div className="text-black text-normal font-[500]">{quantity}</div>
                            <div
                                className="h-6 w-6 text-lg font-medium text-center hover:bg-slate-100 flex justify-center items-center cursor-pointer"
                                onClick={() => dispatch(incrementQuantity(cartWithUser))}
                            >
                                +
                            </div>
                        </div>
                        <div className="font-urbanist text-base my-2 text-slate-600">INR {price}.00</div>
                        <div
                            className="absolute right-0 top-0 text-[#000000] font-medium h-8 w-8 hover:bg-slate-200 flex justify-center items-center text-center"
                            onClick={() => dispatch(removeItem(cartWithUser))}
                        >
                            <svg fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 460.775 460.775" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="23.03875"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
