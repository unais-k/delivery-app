import React, { createContext, useContext, useEffect, useState } from "react";
import { Button } from "@/components/modules/ui/Button";
import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";
import { Slider } from "@/components/modules/ui/Slider";
import { PagerIndicator } from "@/components/modules/ui/PageIndiactor";
import { useRouter } from "next/router";
import Testimonial from "@/components/modules/home/Testimonial";
import NewArrival from "@/components/modules/home/newArrival";
import PopularThisWeek from "@/components/modules/home/popularThisWeek";
import LimitedOffer from "@/components/modules/home/limitedOffer";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/wrapper/Preloader";
import { Message_data } from "@/context";
import InnerLoader from "@/components/innerLoader";
import FeaturedProductListCard from "@/components/modules/home/featuredProductList";
import connectDB from "@/lib/mongooseConnect";
import { Product } from "@/model/productSchema";
import { ProductType } from "@/types/popularProductType";

type Products = ProductType[];

interface ProductListProps {
    products: Products;
}

const HomepageVTwoPage: React.FC<ProductListProps> = ({ products }) => {
    const router = useRouter();
    const sliderRef = React.useRef(null);
    const [sliderState, setSliderState] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    // const { isLoading, setIsLoading } = useContext(Message_data);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 2000);
    }, [setIsLoading]);
    console.log(isLoading);

    return (
        <InnerLoader>
            <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
            <div className="flex flex-col items-center justify-start w-full">
                <div className="overflow-auto overflow-x-auto w-full">
                    <div className="h-[950px] md:h-[700px] md:px-5 relative w-full">
                        <div className="h-[950px] md:h-[700px]  m-auto w-full ">
                            <Slider
                                autoPlay
                                autoPlayInterval={2000}
                                activeIndex={sliderState}
                                responsive={{
                                    0: { items: 1 },
                                    550: { items: 1 },
                                    1050: { items: 2 },
                                }}
                                onSlideChanged={(e) => {
                                    setSliderState(e?.item);
                                }}
                                activeSlideCSS="scale-[1.00] absolute"
                                ref={sliderRef}
                                className="m-auto w-full"
                                items={[
                                    <React.Fragment key={Math.random()}>
                                        <div
                                            className="bg-cover bg-center bg-no-repeat flex flex-col h-[950px] md:h-[700px] items-center justify-start mx-2.5"
                                            style={{
                                                backgroundImage: "url('images/img_group2291.png')",
                                            }}
                                        >
                                            <div className="bg-black-900_68 flex flex-col items-start justify-end p- h-full  sm:px-5 w-full">
                                                <div className="flex flex-col md:gap-10 gap-[148px] items-start justify-start ml-28 md:ml-[0] mt-[86px] w-[44%] md:w-full">
                                                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                                                        <Text
                                                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                                            size="txtPoppinsMedium24WhiteA700"
                                                        >
                                                            50% Off Limited Offer
                                                        </Text>
                                                        <Text
                                                            className="leading-[100.00%] md:text-5xl text-9xl text-white-A700"
                                                            size="txtPlayfairDisplayBold128"
                                                        >
                                                            <>
                                                                Summer <br />
                                                                Collection
                                                            </>
                                                        </Text>
                                                    </div>
                                                    <Button
                                                        className="cursor-pointer flex h-[60px] items-center justify-center w-[245px]"
                                                        rightIcon={
                                                            <Img
                                                                className="h-12 ml-2.5 mr-[33px] my-1.5"
                                                                src="images/img_arrowright.svg"
                                                                alt="arrow_right"
                                                            />
                                                        }
                                                        shape="square"
                                                        color="gray_800"
                                                        size="lg"
                                                        variant="fill"
                                                    >
                                                        <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                                                            Shop Now
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>,
                                ]}
                                renderDotsItem={({ isActive }) => {
                                    if (isActive) {
                                        return (
                                            <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative" />
                                        );
                                    }
                                    return (
                                        <div
                                            className="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                                            role="button"
                                            tabIndex={0}
                                        />
                                    );
                                }}
                            />

                            <PagerIndicator
                                className="absolute bottom-[4%] flex gap-2 h-3 left-[7%] w-28"
                                count={6}
                                activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative"
                                activeIndex={sliderState}
                                inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                                sliderRef={sliderRef}
                                selectedWrapperCss="inline-block"
                                unselectedWrapperCss="inline-block"
                            />
                        </div>
                        <div className="absolute bottom-[4%]  gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center right-[0] shadow-bs w-auto">
                            <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[34px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start mt-1 w-auto">
                                    <Img className="h-[39px] w-[39px]" src="images/img_vector.svg" alt="Vector" />
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                        Jacket
                                    </Text>
                                </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                                    <Img className="h-[35px] w-[68%]" src="images/img_file.svg" alt="file" />
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                        Shirt
                                    </Text>
                                </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                                    <Img className="h-[39px] w-[45%]" src="images/img_vector_68X43.svg" alt="Vector One" />
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                        Pants
                                    </Text>
                                </div>
                            </div>
                            <div className="bg-gray-800 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                                    <Img className="h-7 w-[70%]" src="images/img_cut.svg" alt="cut" />
                                    <Text className="text-lg text-white-A700 w-auto" size="txtPoppinsRegular18WhiteA700">
                                        Shoes
                                    </Text>
                                </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                                    <Img className="h-[39px] w-1/2" src="images/img_vector_68X48.svg" alt="Vector Two" />
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                        Dress
                                    </Text>
                                </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[31px] sm:px-5 w-40">
                                <div className="flex flex-col gap-4 items-center justify-start mb-[3px] mt-[11px] w-auto">
                                    <Img className="h-8 w-2/5" src="images/img_globe.svg" alt="globe" />
                                    <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                        Accesories
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 items-center justify-start max-w-[1632px] my-12 mx-auto pt-2 md:px-5 w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                        <Text className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800" size="txtPoppinsBold36">
                            Featured
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-between w-[7%]">
                            <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                                View all
                            </Text>
                            <Img className="h-[31px] w-8" src="images/img_menu.svg" alt="menu" />
                        </div>
                    </div>
                    <div className="flex flex-col  gap-8 items-center justify-between w-full">
                        <div className="grid  grid-cols-1 md:grid-cols-3  items-center justify-start w-[66%] md:w-full">
                            {products?.map((item) => (
                                <React.Fragment key={item?._id}>
                                    <FeaturedProductListCard {...item} />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* limited offer */}
            <LimitedOffer />
            <div className="flex flex-col  items-center justify-start max-w-[90%] mt-[100px] mx-auto pt-[7px] md:px-5 w-full">
                <NewArrival />
                <PopularThisWeek />
            </div>
            {/* Testimonial */}
            <Testimonial />
        </InnerLoader>
    );
};

export default HomepageVTwoPage;

export async function getServerSideProps() {
    try {
        await connectDB();

        const products: Products = (await Product.find()) || [];
        console.log(products, "producst after fetching");

        return {
            props: {
                products: JSON.parse(JSON.stringify(products)),
            },
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}
