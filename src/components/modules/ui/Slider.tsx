import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    className: string;
    items: React.ReactElement[];
    centerMode: boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
  }>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    {
      className,
      items,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref,
  ) => {
    const isSmall = (index:any) => {
      if (props?.activeIndex !== undefined && props.activeIndex + magnifiedIndex >= (items?.length || 0)) {
        const itemsLength = items?.length ?? 0;
        return index !== (props?.activeIndex ?? 0) + magnifiedIndex - itemsLength;
      } else {
        const activeIndex = props?.activeIndex ?? 0;
        return index !== activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;
    
      Slider.displayName = 'Slider';

    return (
      <div className={className}>
        <AliceCarousel
          items={slideItems}
          disableDotsControls
          touchTracking
          {...props}
          disableButtonsControls
          infinite
          mouseTracking
          ref={ref}
        />
      </div>
    );
  },
);
export { Slider };