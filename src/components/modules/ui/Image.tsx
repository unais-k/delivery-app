import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
    Partial<{
        className: string;
        src: string;
        alt: string;
        width: number | any;
        height: number | any;
    }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
    className,
    src = "defaultNoData.png",
    alt = "testImg",
    height,
    width,
    ...restProps
}) => {
    return <Image className={className} src={src} alt={alt} width={width} height={height} {...restProps} />;
};
export { Img };
