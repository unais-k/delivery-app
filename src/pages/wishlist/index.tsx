import { Img } from "@/components/modules/ui/Image";
import { selectUser } from "@/lib/slices/userSlice";
import { removeItem } from "@/lib/slices/wishListSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

type WishListWithUserType = {
    _id: any;
    userId: any;
};

const Wishlist = () => {
    const wishlist = useSelector((state: any) => state.wishlist);
    const data = wishlist.wishListItem;
    const userId = useSelector(selectUser)._id;
    const dispatch: Dispatch<any> = useDispatch();
    return (
        <div className="py-12">
            {/* Desktop Responsive Start */}
            <div className="hidden sm:flex flex-col justify-start items-start">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Favourites</h1>
                    <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <table className="md:w-[80%] w-full mt-16 whitespace-nowrap">
                        <thead aria-label="table heading" className="w-full h-16 text-left py-6  border-gray-200 border-b ">
                            <tr>
                                <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                                    YOUR PRODUCT
                                </th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    DESCRIPTION
                                </th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    PRICE
                                </th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    MORE OPTIONS
                                </th>
                                <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                            </tr>
                        </thead>
                        <tbody className="w-full text-left">
                            {data?.map((item: any, i: any) => {
                                const _id = item?.product?._id;
                                let wishlistWithUser: WishListWithUserType = {
                                    _id,
                                    userId,
                                };
                                return (
                                    <React.Fragment key={item?._id}>
                                        <tr className="border-gray-200 border-b">
                                            <th>
                                                <Img
                                                    className="my-10 pl-4 lg:pl-10 2xl:pl-20"
                                                    src={item?.product?.images[0]}
                                                    alt="girl"
                                                />
                                            </th>
                                            <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                                <p className="text-base leading-4 text-gray-800">{item?.product?.title}</p>
                                            </th>
                                            <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                                <p>${item?.product?.price}</p>
                                            </th>
                                            <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline"
                                                >
                                                    {item?.product?.description}
                                                </a>
                                            </th>
                                            <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                                <button
                                                    onClick={() => dispatch(removeItem(wishlistWithUser))}
                                                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                                                >
                                                    <p>Remove Item</p>
                                                </button>
                                            </th>
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            <div className=" flex justify-center items-center">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                        <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    {data?.map((item: any, i: any) => {
                        return (
                            <React.Fragment key={item?._id}>
                                <div className="border-gray-200 border-b pb-10">
                                    <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                        <div>
                                            <Img src={item?.product?.images[0]} alt="shoe" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-6 flex justify-between w-full jusitfy-center items-center">
                                        <div>
                                            <p className="w-36 text-base leading-6 text-gray-800">{item?.product?.title}</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold leading-4 text-gray-800">
                                                ${item?.product?.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-4 mt-6 flex justify-between w-ful  jusitfy-center items-center">
                                        <div>
                                            <a
                                                href="javascript:void(0)"
                                                className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                            >
                                                {item?.product?.description}
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => dispatch(removeItem(item?.product?._id))}
                                                className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"
                                            >
                                                <p>Remove Item</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            {/* Mobile Responsive End */}
        </div>
    );
};

export default Wishlist;
