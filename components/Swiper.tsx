import { ReactNode } from "react";
import Scrollable from "@/components/ui/Scrollable";
import ScrollableItem from "@/components/ui/ScrollableItem";
interface ISwiperProps {
  children: ReactNode[];
  width?: number;
}

function Swiper(props: ISwiperProps) {
  const { children, width } = props;
  return (
    <Scrollable>
      {children.map((child, index) => (
        <ScrollableItem width={width} key={index}>
          {child}
        </ScrollableItem>
      ))}
    </Scrollable>
  );
}

export default Swiper;
