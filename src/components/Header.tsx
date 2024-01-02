
import React from "react";
import { Button } from "./modules/ui/Button";
import { Text } from "./modules/ui/Text";
import { Img } from "./modules/ui/Image";
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
     <div className="flex md:flex flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-row gap-2 items-center justify-start w-[7%] md:w-full">
                  <div
                    className="h-6 w-[35%]"
                   
                  ><FaResearchgate /></div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Elliye{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 border-2 border-gray-50 border-solid flex md:flex-1 flex-row sm:gap-10 items-center justify-between mb-[5px] md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[36%] md:w-full">
                  <Text
                    className="text-gray-500_87 text-lg"
                    size="txtPoppinsRegular18Gray50087"
                  >
                    Search here
                  </Text>
                  <div className=" h-12 md:h-[18px] p-4 relative w-12">
                  <CiSearch />

                  </div>
                </div>
                <FaEnvelope />
                < FaShoppingCart/>
                <Button
                  className="cursor-pointer font-bold leading-[normal] ml-8 md:ml-[0] text-center text-sm w-[107px]"
                  shape="square"
                  color="gray_800"
                  size="lg"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;