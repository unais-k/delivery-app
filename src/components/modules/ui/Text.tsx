const sizeClasses = {
    txtPoppinsExtraBold46: "font-extrabold font-poppins",
    txtPoppinsBold18Gray900: "font-bold font-poppins",
    txtPoppinsBold18Gray600: "font-bold font-urbanist",
    txtUrbanistExtraBold28: "font-extrabold font-poppins",
    txtPoppinsRegular20: "font-poppins font-normal",
    txtPoppinsExtraBold20: "font-extrabold font-poppins",
    txtPoppinsSemiBold16: "font-poppins font-semibold",
    txtUrbanistSemiBold18: "font-urbanist font-semibold",
    txtPoppinsExtraBold36WhiteA700: "font-extrabold font-poppins",
    txtPoppinsRegular14: "font-poppins font-normal",
    txtPoppinsSemiBold12: "font-poppins font-semibold",
    txtPoppinsRegular18: "font-poppins font-normal",
    txtPoppinsSemiBold20Gray900: "font-poppins font-semibold",
    txtUrbanistSemiBold20Gray600: "font-urbanist font-semibold",
    txtPoppinsSemiBold12Gray900: "font-poppins font-semibold",
    txtPoppinsSemiBold18Gray700: "font-poppins font-semibold",
    txtPoppinsBold18DeepOrange400: "font-bold font-poppins",
    txtPoppinsBold24Gray900: "font-bold font-poppins",
    txtPoppinsSemiBold18Gray600: "font-poppins font-semibold",
    txtPoppinsBold18: "font-bold font-poppins",
    txtPoppinsBold1925: "font-bold font-poppins",
    txtPoppinsSemiBold16Gray600: "font-poppins font-semibold",
    txtPoppinsExtraBold54: "font-extrabold font-poppins",
    txtPoppinsSemiBold24Gray600: "font-poppins font-semibold",
    txtPoppinsSemiBold16Gray700: "font-poppins font-semibold",
    txtPoppinsRegular18Gray600: "font-poppins font-normal",
    txtPoppinsRegular18Gray700: "font-poppins font-normal",
    txtPoppinsExtraBold36: "font-extrabold font-poppins",
    txtPoppinsSemiBold20: "font-poppins font-semibold",
    txtPoppinsBold18OrangeA700: "font-bold font-poppins",
    txtPoppinsSemiBold1283: "font-poppins font-semibold",
    txtPoppinsBold24: "font-bold font-poppins",
    txtPoppinsSemiBold24: "font-poppins font-semibold",
    txtPoppinsBold22: "font-bold font-poppins",
    txtPoppinsMedium16: "font-poppins font-medium",
    txtMarkoOneRegular20: "font-poppins font-normal",
    txtPoppinsSemiBold1283Gray700: "font-poppins font-semibold",
} as const;

export type TextProps = Partial<{
    className: string;
    size: keyof typeof sizeClasses;
    as: any;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({ children, className = "", size, as, ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={` ${className} ${size && sizeClasses[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
