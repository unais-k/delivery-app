import React from "react";
import { Img } from "@/components/modules/ui/Image";
import { Text } from "@/components/modules/ui/Text";
import { footerLinks } from "@/constants/appConstants";
import Accordion from "./modules/ui/Accordion";

type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <>
            <footer className={props.className}>
                <div className="md:px-20 w-full my-20">
                    <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
                        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
                            <div className="flex flex-col items-start w-full justify-center md:justify-start mr-10">
                                <Img
                                    width={500}
                                    height={500}
                                    className="w-fit h-[72.14px] object-contain"
                                    src="/LogoImage.svg"
                                    alt="home_One"
                                />
                                <Text className="text-orange-400 text-xl w-auto" size="txtUrbanistSemiBold18">
                                    Delivery
                                </Text>
                            </div>
                            <div className="hidden sm:block sm:w-fit w-full px-10">
                                <div className="flex-[1.5] w-full flex flex-row justify-between gap-x-5 md:mt-0 mt-10">
                                    {footerLinks.map((footerLink) => (
                                        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={footerLink.id}>
                                            <Text className="text-gray-900 text-lg w-full" size="txtPoppinsBold18Gray900">
                                                {footerLink.title}
                                            </Text>
                                            <ul className="list-none mt-4">
                                                {footerLink.links.map((link, index) => (
                                                    <Text
                                                        key={index}
                                                        size="txtPoppinsSemiBold16"
                                                        className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer ${
                                                            index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                                                        } `}
                                                    >
                                                        {link.name}
                                                    </Text>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:hidden block w-full px-5 justify-start">
                                <div className="flex-[1.5] w-full border border-solid flex flex-row justify-between flex-wrap">
                                    {footerLinks.map((footerLink) => (
                                        <Accordion key={footerLink.id} title={footerLink.title} links={footerLink.links} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-between gap-5 items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                            <Text className="text-base text-gray-900 w-full" size="txtPoppinsSemiBold16">
                                © 2023. All rights reserved.
                            </Text>

                            <div className="flex flex-row gap-3 items-start justify-start">
                                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                                    <Img
                                        width={100}
                                        height={100}
                                        className="h-[30px] w-[30px]"
                                        src="images/img_plus.svg"
                                        alt="plus"
                                    />
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                                    <Img
                                        width={100}
                                        height={100}
                                        className="h-[30px] w-[30px]"
                                        src="images/img_twitter.svg"
                                        alt="twitter"
                                    />
                                </div>
                                <Img
                                    width={100}
                                    height={100}
                                    className="h-[30px] w-[30px]"
                                    src="images/img_instagram_orange_a700_30x30.svg"
                                    alt="instagram"
                                />
                                <Img
                                    width={100}
                                    height={100}
                                    className="h-[30px] w-[30px]"
                                    src="images/img_linkedin.svg"
                                    alt="linkedin"
                                />
                                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                                    <Img
                                        width={100}
                                        height={100}
                                        className="h-[30px] w-[30px]"
                                        src="images/img_clock_orange_a700.svg"
                                        alt="clock"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

Footer.defaultProps = {};

export default Footer;
