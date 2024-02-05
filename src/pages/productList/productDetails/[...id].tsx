import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";
import { List } from "@/components/modules/ui/List";
import { Button } from "@/components/modules/ui/Button";
import Footer from "@/components/Footer";
import { Line } from "@/components/modules/ui/Line";
import connectDB from "@/lib/mongooseConnect";
import { Product } from "@/model/productSchema";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa6";
import { ProductType } from "../../../types/popularProductType";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { addToWishlist } from "@/lib/slices/wishListSlice";
import { getCookies } from "cookies-next";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

interface ProductDetailsProps {
    product: ProductType | null;
    similarProducts: ProductType[];
}

const ProductDetailsPage: React.FC<ProductDetailsProps> = ({ product, similarProducts }: any) => {
    const cook = getCookies();
    const userId = cook?.userId;
    const dispatch: Dispatch<any> = useDispatch();
    const router = useRouter();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const handleWishlist = () => {
        if (userId == "") {
            toast.warn("please login");
            router.push("/auth");
            return;
        }
        dispatch(addToWishlist({ product }));
    };

    return (
        <>
            <div className="bg-white-A700 flex flex-col font-poppins gap-8 items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col md:flex-row gap-8 items-start place-items-start justify-start max-w-[1632px] mx-auto md:px-5 w-full">
                        <div className="md:block hidden w-1/2 place-items-start ">
                            <div className="grid grid-cols-2 gap-2 content-start  ">
                                {product?.images &&
                                    product?.images.length > 2 &&
                                    product?.images.map((image: string, index: number) => (
                                        <Img
                                            key={index}
                                            className="h-[337px] md:h-auto object-cover w-fit"
                                            src={image}
                                            alt={`Product Image ${index + 1}`}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="md:hidden block w-screen">
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                }}
                                modules={[Scrollbar]}
                                className="mySwiper"
                            >
                                {product?.images &&
                                    product?.images.length > 2 &&
                                    product?.images.map((image: string, index: number) => (
                                        <SwiperSlide key={index}>
                                            <Img
                                                key={index}
                                                className="aspect-square object-cover w-screen"
                                                src={image}
                                                alt={`Product Image ${index + 1}`}
                                            />
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-12 items-start justify-start md:px-0 px-5 w-full">
                            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsMedium18Gray500">
                                        Featured
                                    </Text>
                                    <Text className="text-bluegray-100 text-lg w-auto" size="txtPoppinsMedium18Bluegray100">
                                        <>&gt;</>
                                    </Text>
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsMedium18Gray500">
                                        Purple Warm Jacket
                                    </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                        className="md:text-5xl sm:text-[42px] text-[36px] text-gray-800"
                                        size="txtPoppinsBold56"
                                    >
                                        <>{product?.title}</>
                                    </Text>
                                    <Text
                                        className="mt-[41px]  text-[32px] md:text-[34px] text-gray-500"
                                        size="txtPoppinsRegular36Gray500"
                                    >
                                        USD $ {product?.price}
                                    </Text>
                                    <Line className="bg-bluegray-100 h-px mt-10 w-full" />
                                    {/* <Text
                                        className="leading-[32.00px] mt-[31px] text-gray-500 text-lg w-full"
                                        size="txtPoppinsRegular18Gray500"
                                    >
                                        {product?.description}
                                    </Text> */}
                                </div>
                                <div className="flex flex-col gap-y-5">
                                    <div className="">
                                        <Text size="txtPlayfairDisplayRegular96">color</Text>
                                        <div className="flex flex-row">
                                            <div className="py-2 px-4 border border-gray-900 font-raleway text-center">White</div>
                                            <div className="py-2 px-4 border border-gray-900 font-raleway text-center">Brown</div>
                                            <div className="py-2 px-4 border border-gray-900 font-raleway text-center">Yellow</div>
                                            <div className="py-2 px-4 border border-gray-900 font-raleway text-center">Blue</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Text size="txtPlayfairDisplayRegular96">size</Text>
                                            <div className="flex flex-row justify-start items-center">
                                                {sizes.map((item, id) => {
                                                    return (
                                                        <div
                                                            className="border border-gray-900 py-2 px-4 font-raleway text-center items-center"
                                                            key={id}
                                                        >
                                                            {item}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-6 items-center justify-start  md:w-full">
                                <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                                    Quantity
                                </Text>
                                <div className="h-12 relative w-[30%] bg-red-600">
                                    <Button
                                        className="absolute flex h-12 inset-y-[0] items-center justify-center my-auto right-[0] w-12"
                                        shape="square"
                                        color="gray_800"
                                        size="lg"
                                        variant="fill"
                                    >
                                        <div className="bg-gray-50 flex flex-col md:h-auto h-full items-center justify-center my-auto p-4 w-12">
                                            <FaPlus />{" "}
                                        </div>
                                    </Button>
                                    <div className="bg-gray-50 flex flex-col md:h-auto h-full items-center justify-center my-auto p-4 w-12">
                                        <FiMinus />{" "}
                                    </div>
                                    <Button
                                        className="absolute cursor-pointer font-medium h-full inset-[0] leading-[normal] m-auto text-center text-lg w-[171px]"
                                        shape="square"
                                        color="bluegray_100"
                                        size="lg"
                                        variant="outline"
                                    >
                                        1
                                    </Button>
                                </div>
                            </div>
                            <Button>
                                <div onClick={handleAddToCart} className="font-bold leading-[normal] text-left text-lg">
                                    Add to Cart
                                </div>
                            </Button>
                            <Button>
                                <div onClick={handleWishlist} className="font-bold leading-[normal] text-left text-lg">
                                    Add to wishlist
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-start max-w-[1632px] mt-[183px] mx-auto md:px-5 w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between py-[3px] w-full p-5">
                            <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between sm:mt-0 mt-1 w-1/4 sm:w-full">
                                <Text
                                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                                    size="txtPoppinsBold36"
                                >
                                    Similiar Product
                                </Text>
                                <Text className="text-gray-500 text-lg" size="txtPoppinsMedium18Gray500">
                                    View all
                                </Text>
                            </div>
                            {/* <Img
                className="h-12"
                src="images/img_button_bluegray_100.svg"
                alt="button"
              /> */}
                        </div>
                        <div className="flex md:flex-row flex-row gap-8 items-center justify-between w-full">
                            <List
                                className="md:flex-1 sm:flex-row flex-col gap-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full md:w-full"
                                orientation="horizontal"
                            >
                                {similarProducts?.map((item: any) => (
                                    <div
                                        key={item._id}
                                        className="flex flex-col gap-4 h-[500px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full"
                                    >
                                        <Img
                                            className="h-[250px] md:h-auto object-cover w-[250px]"
                                            src={item.images[0]}
                                            alt="placeholder Four"
                                        />
                                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                                            <Text
                                                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                                                size="txtPoppinsMedium24"
                                            >
                                                {item?.title}
                                            </Text>
                                            <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsMedium18Gray500">
                                                {item.price}
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </List>
                        </div>
                    </div>
                    <Footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full" />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ProductDetailsProps, { id: string }> = async ({
    params,
}: GetServerSidePropsContext) => {
    if (!params) {
        throw new Error("Params not found");
    }

    try {
        const productId = params.id;

        await connectDB();

        const product: ProductType | null = await Product.findById(productId);
        let similarProducts: ProductType[] = [];

        if (product) {
            similarProducts = await Product.find({
                category: product.category,
            }).limit(4);
        }

        return {
            props: {
                product: JSON.parse(JSON.stringify(product)),
                similarProducts: JSON.parse(JSON.stringify(similarProducts)),
            },
        };
    } catch (error) {
        console.error("Error fetching product details:", error);
        return {
            props: {
                product: {},
                similarProducts: [],
            },
        };
    }
};
export default ProductDetailsPage;
