import SmallCartCard from "@/components/modules/cart/SmallCartCard";
import CheckOutForm from "@/components/modules/checkOut/checkOutForm";
import { Line } from "@/components/modules/ui/Line";
import { List } from "@/components/modules/ui/List";
import { Text } from "@/components/modules/ui/Text";
import Stripe from "@/components/stripe/Stripe";
import { useSelector } from "react-redux";


const Checkout: React.FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const cartDetails = cart?.cartItem?.reduce(
    (acc: any, curr: any) => {
      const itemTotal = curr?.unit * curr?.product?.price;

      return {
        totalAmount: acc.totalAmount + itemTotal,
        totalCount: acc.totalCount + curr?.unit,
      };
    },
    { totalAmount: 0, totalCount: 0 }
  );
  const totalAmount = cartDetails.totalAmount;
  const totalCount = cartDetails.totalCount;
  return (
    <div className="flex flex-col items-start justify-start px-10 w-full">
      <div className="flex flex-row gap-4 items-start justify-start w-full">
        <Text className="font-medium text-gray-500 text-lg">Home</Text>
        <Text className="font-medium text-bluegray-100 text-lg">
          <>&gt;</>
        </Text>
       
        <Text className="font-medium text-gray-500 text-lg">Cart</Text>
        <Text className="font-medium text-bluegray-100 text-lg">
          <>&gt;</>
        </Text>
        <Text className="font-medium text-gray-800 text-lg">Checkout</Text>
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
            <Line className="bg-gray-800 h-0.5 my-[27px] w-[46%] max-w-[300px]" />
          </div>

          <div className="flex flex-row items-center justify-center gap-[21px] w-full">
            <div className="flex flex-row gap-6 items-center w-fit justify-center">
              <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl text-bluegray-100 text-center sm:text-lg w-14">
                2
              </Text>
              <Text className="font-medium text-2xl flex justify-center items-center text-gray-800 sm:text-lg">
                Checkout
              </Text>
            </div>
            <Line className="bg-gray-800 h-0.5 my-[27px] w-[46%]" />
          </div>
          <div className="flex md:flex-1 flex-row gap-6 items-center justify-start">
            <Text className="border-2 border-bluegray-100 border-solid flex font-medium h-14 items-center justify-center rounded-[50%] text-2xl text-bluegray-100 text-center sm:text-lg w-14">
              3
            </Text>
            <Text className="font-medium text-2xl text-bluegray-100 sm:text-lg">
              Completed
            </Text>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="mt-10 w-full h-full flex md:flex-row flex-col">
        <div className=" w-full h-full flex-col justify-start items-center">
          <div className="p-10">
        <CheckOutForm/>
      

          </div>
        </div>
        {/* order info */}
        <div className=" w-full p-5">
          <div>
            <div className="flex flex-col justify-start items-start font-raleway w-full p-6">
              <div>
                <h1 className="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                  Your bag
                </h1>
              </div>
              <List
                className="flex flex-col gap-[31px] justify-start items-start w-full"
                orientation="vertical"
              >
                {cart?.cartItem?.map((item: any) => {
                  return <SmallCartCard key={item._id} {...item} />;
                })}
              </List>
              <div>
                <h1 className="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                  Order Summary
                </h1>
              </div>
              <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                    Total items
                  </p>
                  <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {totalCount}
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                    Total Charges
                  </p>
                  <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    $2790
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                    Shipping charges
                  </p>
                  <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    $90
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                    Sub total
                  </p>
                  <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {totalAmount}
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl dark:text-white font-semibold leading-4 text-gray-800">
                  Estimated Total
                </p>
                <p className="text-lg dark:text-white font-semibold leading-4 text-gray-800">
                  $2900
                </p>
              </div>
            </div>
          </div>
          <Stripe />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
