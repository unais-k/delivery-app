import React from "react";
import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";
import { List } from "@/components/modules/ui/List";
import { Button } from "@/components/modules/ui/Button";
import { RatingBar } from "@/components/modules/ui/RatingBar";
import Checkbox from "rc-checkbox";
import Footer from "@/components/Footer";
import { Line } from "@/components/modules/ui/Line";
import connectDB from "@/lib/mongooseConnect";
import { Product } from "@/model/productSchema";
import Link from "next/link";
import { ProductType } from "../../types/popularProductType";

type Products = ProductType[];

interface ProductListProps {
    products: Products;
}
const ProductListPage: React.FC<ProductListProps> = ({ products }) => {
  console.log(products)
    return (
        <>
            <div className="bg-white-A700 flex flex-col font-poppins gap-9 items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-start justify-start w-full p-5">
                    <div className="flex flex-row gap-4 items-center justify-start ml-36 lg:ml-[0] lg:px-5 w-[11%] lg:w-full">
                        <Text className="text-gray-500 text-lg" size="txtPoppinsMedium18Gray500">
                            Home
                        </Text>
                        <Text className="text-bluegray-100 text-lg" size="txtPoppinsMedium18Bluegray100">
                            <>&gt;</>
                        </Text>
                        <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                            Product List
                        </Text>
                    </div>

                    <div className="w-full grid place-items-center">
                        <Text className="text-4xl text-gray-800" size="txtPoppinsBold36">
                            Product List
                        </Text>
                    </div>
                    <div className="flex sm:flex-row flex-row gap-8 items-start justify-start max-w-[1400px] mt-[70px] mx-auto sm:px-5 w-full">
                        <div className="flex md:flex-none flex-col items-start justify-start pt-1.5 w-[16%] ">
                            <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                                <div className="flex flex-col gap-8 items-start justify-start w-full">
                                    <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                                        Categories
                                    </Text>
                                    <Line className="bg-bluegray-100 h-px w-full" />
                                </div>
                                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_cut_32X32.svg" alt="cut" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Jacket
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_file.svg" alt="file" />
                                        <Text className="text-gray-800 text-lg w-auto" size="txtPoppinsRegular18">
                                            Shirt
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_location_32X32.svg" alt="location" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Pants
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_computer_32X32.svg" alt="computer" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Shoes
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_settings_32X32.svg" alt="settings" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Dress
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_signal_32X32.svg" alt="signal" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Accesories
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-8 w-8" src="images/img_skirt_32X32.svg" alt="Skirt" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            Skirt
                                        </Text>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                        <Img className="h-6 w-6" src="images/img_arrowdown_gray_500.svg" alt="arrowdown" />
                                        <Text className="text-gray-500 text-lg w-auto" size="txtPoppinsRegular18Gray500">
                                            View more
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <Line className="bg-bluegray-100 h-px mt-8 w-full" />
                            <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[68%] md:w-full">
                                <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                                    Filter by Price
                                </Text>
                                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                                    <Checkbox />

                                    <div className="flex flex-row gap-4 items-center justify-start w-[87%] md:w-full">
                                        <Button
                                            className="flex h-6 items-center justify-center w-6"
                                            shape="square"
                                            color="gray_800"
                                            size="xs"
                                            variant="fill"
                                        >
                                            <Img src="images/img_checkedbox.svg" alt="Checkedbox" />
                                        </Button>
                                        <Text className="text-gray-800 text-lg" size="txtPoppinsRegular18">
                                            $100 - $250
                                        </Text>
                                    </div>
                                    <Checkbox />
                                    <Checkbox />
                                    <Checkbox />
                                </div>
                            </div>
                            <Line className="bg-bluegray-100 h-px mt-8 w-full" />
                            <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[79%] md:w-full">
                                <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
                                    Filter by Rating
                                </Text>
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                    <div className="flex flex-row gap-4 items-center justify-start w-[34%] md:w-full">
                                        <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                                        <Img className="h-6 w-6" src="images/img_star1_3.svg" alt="StarOne" />
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-1/2 md:w-full">
                                        <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                            <Img className="h-6 w-6" src="images/img_star1_4.svg" alt="StarOne One" />
                                            <Img className="h-6 w-6" src="images/img_star2_2.svg" alt="StarTwo" />
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-start w-[67%] md:w-full">
                                        <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                            <Img className="h-6 w-6" src="images/img_star1_5.svg" alt="StarOne Two" />
                                            <Img className="h-6 w-6" src="images/img_star2_3.svg" alt="StarTwo One" />
                                            <Img className="h-6 w-6" src="images/img_star3_1.svg" alt="StarThree" />
                                        </div>
                                    </div>
                                    <List className="flex flex-col gap-4 items-center w-full" orientation="vertical">
                                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-start w-[84%] md:w-full">
                                            <Button
                                                className="flex h-6 items-center justify-center w-6"
                                                shape="square"
                                                color="gray_800"
                                                size="xs"
                                                variant="fill"
                                            >
                                                <Img src="images/img_checkedbox.svg" alt="Checkedbox One" />
                                            </Button>
                                            <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                                <Img className="h-6 w-6" src="images/img_star1_6.svg" alt="StarOne Three" />
                                                <Img className="h-6 w-6" src="images/img_star2_4.svg" alt="StarTwo Two" />
                                                <Img className="h-6 w-6" src="images/img_star3_2.svg" alt="StarThree One" />
                                                <Img className="h-6 w-6" src="images/img_star5_24X24.svg" alt="StarFive" />
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-row gap-4 items-center justify-between w-full">
                                            <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                                            <div className="flex flex-row items-start justify-start w-auto">
                                                <RatingBar
                                                    className="flex justify-between w-[152px]"
                                                    value={5}
                                                    starCount={5}
                                                    activeColor="#fae952"
                                                    size={24}
                                                ></RatingBar>
                                            </div>
                                        </div>
                                    </List>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-8 items-center justify-start  md:w-full">
                            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between pt-0.5 w-full">
                                {/* <SelectBox
                  className="sm:flex-1 leading-[normal] text-gray-500 text-left text-lg w-[18%] sm:w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="sort"
                  options={sortOptionsList}
                  isSearchable={false}
                  placeholder="Sort by: Newest Items"
                  size="xs"
                /> */}
                            </div>
                            <div className="common-pointer flex flex-col gap-14 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                    <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                                        {products.map((item: ProductType) => {
                                            return (
                                                <Link
                                                    key={item._id}
                                                    className="btn-default"
                                                    href={"/productList/productDetails/" + item._id}
                                                >
                                                    <div
                                                        className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full"
                                                    >
                                                        <Img
                                                            className="h-[245px] md:h-auto object-cover w-[245px]"
                                                            src={item.images[0]}
                                                            alt="placeholder"
                                                        />
                                                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                                                            <Text
                                                                className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                                                                size="txtPoppinsMedium24"
                                                            >
                                                                <>
                                                                    Green <br />
                                                                    {item.title}
                                                                </>
                                                            </Text>
                                                            <Text
                                                                className="text-gray-500 text-lg w-auto"
                                                                size="txtPoppinsMedium18Gray500"
                                                            >
                                                                {item.price}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* <div className="flex flex-row gap-6 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer h-[50px] leading-[normal] text-center text-lg w-[50px]"
                    shape="square"
                    color="gray_800"
                    size="lg"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer h-[51px] leading-[normal] text-center text-lg w-[51px]"
                    shape="square"
                    color="gray_500"
                    size="lg"
                    variant="outline"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer h-[51px] leading-[normal] text-center text-lg w-[51px]"
                    shape="square"
                    color="gray_500"
                    size="lg"
                    variant="outline"
                  >
                    3
                  </Button>
                  <Img
                    className="h-6 w-6"
                    src="images/img_info_24X24.svg"
                    alt="info"
                  />
                </div> */}
                            </div>
                        </div>
                    </div>
                    <Footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full" />
                </div>
            </div>
        </>
    );
};

export default ProductListPage;

export async function getServerSideProps() {
    try {

        await connectDB();

        const products: Products = (await Product.find()) || [];

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
