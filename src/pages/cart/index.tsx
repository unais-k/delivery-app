import CartCard from "@/components/modules/cart/CartCard";
import { Button } from "@/components/modules/ui/Button";
import { Img } from "@/components/modules/ui/Image";
import { Input } from "@/components/modules/ui/Input";
import { Line } from "@/components/modules/ui/Line";
import { List } from "@/components/modules/ui/List";
import { Text } from "@/components/modules/ui/Text";
import React from "react";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
    const cart = useSelector((state: any) => state.cart);
    console.log(cart.cartItem);
    const totalAmount = cart?.cartItem?.reduce((acc:any, curr:any) => {
        const itemTotal = curr?.quantity * curr?.price;
        return acc + itemTotal;
      }, 0);
    return (
        <>
            <div className="flex flex-col items-start justify-start px-10 w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Text className="font-medium text-gray-500 text-lg">Home</Text>
                    <Text className="font-medium text-bluegray-100 text-lg">
                        <>&gt;</>
                    </Text>
                    <Text className="font-medium text-gray-800 text-lg">Shopping Cart</Text>
                </div>
                <Text className="font-bold mt-[52px] md:text-4xl text-xl sm:text-[32px] text-gray-800">Shopping Cart</Text>
                <div className="flex flex-row md:gap-5 items-center justify-start mt-[100px] mx-auto md:px-5 w-full">
                    <div className="flex flex-row gap-[21px] items-center justify-start w-fit">
                        <div className="flex flex-row gap-5 items-center justify-start">
                            <Text className="border-2 border-gray-800 border-solid flex font-medium h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14">
                                1
                            </Text>
                            <Text className="font-medium text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                                Shopping Cart
                            </Text>
                        </div>
                        <Line className="bg-gray-800 h-0.5 my-[27px] w-[300px]" />
                    </div>

                    <div className="flex flex-row items-center justify-center gap-[21px] w-fit ml-8">
                        <div className="flex flex-row gap-6 items-center w-fit justify-center ">
                            <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-bluegray-100 text-center sm:text-xl w-14">
                                2
                            </Text>
                            <Text className="font-medium text-2xl md:text-[22px] text-bluegray-100 sm:text-xl">
                                Checkout
                            </Text>
                        </div>
                        <Line className="bg-bluegray-100 h-0.5 my-[27px] w-[300px]" />
                    </div>

                    <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8">
                        <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-bluegray-100 text-center sm:text-xl w-14">
                            3
                        </Text>
                        <Text className="font-medium text-2xl md:text-[22px] text-bluegray-100 sm:text-xl">Completed</Text>
                    </div>
                </div>
                {/* progress bar end here */}
                {/* table head */}
                <div className="flex flex-col md:gap-10 gap-20 items-end justify-start max-w-[1632px] mt-20 mx-auto md:px-5 w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                            <div className="flex flex-col gap-8 items-start justify-start pt-1 w-full">
                                <div className="flex flex-row md:gap-5 items-center py-3 px-5 justify-between w-[85%]">
                                    <Text className="font-medium text-gray-500 text-lg">Product</Text>
                                    <Text className="font-medium text-gray-500 text-lg">Quantity</Text>
                                    <Text className="font-medium text-gray-500 text-lg">Price</Text>
                                    <Text className="font-medium text-gray-500 text-lg">Total</Text>
                                </div>
                                <Line className="bg-bluegray-100 h-px w-full" />
                            </div>
                            <List className="flex flex-col gap-[31px] items-center w-full" orientation="vertical">
                                {cart?.cartItem?.map((item: any) => {
                                    return <CartCard key={item._id} {...item} />;
                                })}
                            </List>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 items-start justify-between pb-2 w-full">
                            <div className="border border-bluegray-100 border-solid flex flex-row items-center justify-between pl-4 md:w-[29%] w-full">
                                <Input placeholder="Enter coupon code" className="text-gray-500_87 text-lg tracking-[0.36px]"/>
                                <Button className="bg-gray-800 cursor-pointer h-[60px] leading-[normal] min-w-[137px] py-[19px] text-center text-lg text-white-A700">
                                    Apply Code
                                </Button>
                            </div>
                            <div className="flex flex-col gap-[29px] items-end justify-start  mt-1">
                                <Text className="font-medium text-gray-500 text-lg">Total</Text>
                                <Text className="font-bold text-4xl sm:text-[32px] md:text-[34px] text-gray-800">
                                    ${totalAmount}
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 items-center justify-end w-[26%] md:w-full mb-10">
                        <Button className="border border-gray-800 border-solid cursor-pointer font-medium h-12 leading-[normal] min-w-[207px] py-[13px] text-center text-gray-800 text-lg">
                            Continue Shopping
                        </Button>
                        <Button className="bg-gray-800 cursor-pointer font-medium h-12 leading-[normal] py-[15px] text-center text-lg text-white-A700 w-[171px]">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
