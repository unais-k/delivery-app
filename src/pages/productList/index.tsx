import React from "react";
import { Text } from "@/components/modules/ui/Text";
import { Img } from "@/components/modules/ui/Image";
import connectDB from "@/lib/mongooseConnect";
import { Product } from "@/model/productSchema";
import Link from "next/link";
import { ProductType } from "../../types/popularProductType";
import InnerLoader from "@/components/innerLoader";
import FilterBar from "./FilterBar";
import ProductListingCard from "./ProductCard";

type Products = ProductType[];

interface ProductListProps {
    products: Products;
}
const ProductListPage: React.FC<ProductListProps> = ({ products }) => {
    return (
        <InnerLoader>
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
                    {/* filter bar */}
                    <div className="flex sm:flex-row flex-row gap-8 items-start justify-start max-w-[1400px] mt-[70px] mx-auto sm:px-5 w-full">
                        <FilterBar />

                        <div className="flex md:flex-1 flex-col gap-8 items-center justify-start  md:w-full">
                            <div className="common-pointer flex flex-col gap-14 items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 justify-center min-h-[auto] w-full">
                                        {products.map((item: ProductType) => {
                                            return (
                                                <Link
                                                    key={item._id}
                                                    className="btn-default"
                                                    href={"/productList/productDetails/" + item._id}
                                                >
                                                    <ProductListingCard {...item} />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InnerLoader>
    );
};

export default ProductListPage;

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
