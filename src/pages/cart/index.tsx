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
    const totalAmount = cart?.cartItem?.reduce((acc: any, curr: any) => {
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
                <div className="w-full lg:block hidden">
                    <div className="flex flex-row items-center justify-start mt-[100px] mx-auto md:px-5 w-full">
                        <div className="flex flex-row gap-[21px] items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-center justify-start">
                                <Text className="border-2 border-gray-800 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl text-center text-gray-800 sm:text-lg w-14">
                                    1
                                </Text>
                                <Text className="font-medium text-2xl flex justify-center items-center text-gray-800 sm:text-lg">
                                    Cart
                                </Text>
                            </div>
                            <Line className="bg-gray-800 h-0.5 my-[27px] w-[46%]" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-[21px] w-full">
                            <div className="flex flex-row gap-6 items-center w-fit justify-center">
                                <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl text-bluegray-100 text-center sm:text-lg w-14">
                                    2
                                </Text>
                                <Text className="font-medium text-2xl text-bluegray-100 sm:text-lg">Checkout</Text>
                            </div>
                            <Line className="bg-bluegray-100 h-0.5 my-[27px] w-[46%] max-w-[300px]" />
                        </div>
                        <div className="flex md:flex-1 flex-row gap-6 items-center justify-start">
                            <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl text-bluegray-100 text-center sm:text-lg w-14">
                                3
                            </Text>
                            <Text className="font-medium text-2xl text-bluegray-100 sm:text-lg">Completed</Text>
                        </div>
                    </div>
                </div>
                {/* progress bar end here */}
                {/* table head */}
                <div className="flex flex-col md:gap-10 gap-20 items-end justify-start max-w-[1632px] mt-20 mx-auto md:px-5 w-full h-full">
                    <div className="flex flex-col md:flex-row items-center justify-start w-full relative">
                        <div className="flex flex-col gap-[31px] items-start sm:p-8 p-3 md:p-14 mb-10 lg:p-20 justify-start w-fit bg-[#F4F9F9]">
                            <Text className="text-start text-xl font-[500] font-urbanist uppercase">Cart Item</Text>
                            <List className="flex flex-col gap-[31px] items-center w-full" orientation="vertical">
                                {cart?.cartItem?.map((item: any) => {
                                    return <CartCard key={item._id} {...item} />;
                                })}
                            </List>
                        </div>

                        <div className="flex flex-col md:gap-10 items-start justify-center p-5 w-fit right-0 top-0 h-fit absolute">
                            {/* <div className="absolute top-0 w-fit h-full"> */}
                            <div className="border border-bluegray-100 border-solid flex flex-row items-center justify-between pl-4 w-full">
                                <Input
                                    placeholder="Enter coupon code"
                                    className="text-gray-500_87 text-lg tracking-[0.36px]"
                                />
                                <Button className="bg-gray-800 cursor-pointer h-[60px] leading-[normal] min-w-[137px] py-[19px] text-center text-lg text-white-A700">
                                    Apply Code
                                </Button>
                            </div>
                            <div className="flex flex-row gap-[29px] items-end justify-between w-full  mt-1">
                                <Text className="font-medium text-gray-500 text-lg">Total</Text>
                                <Text className="font-bold text-4xl sm:text-[32px] md:text-[34px] text-gray-800">
                                    ${totalAmount}
                                </Text>
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
