import Image from "next/image";
import Slider from "@/components/Slider";
interface IPreviewProps {
  data: string[];
}

function Preview(props: IPreviewProps) {
  const { data } = props;
  return (
    <Slider>
      {data.map((image, index) => (
        <Image
          key={index}
          width={1000}
          height={1000}
          alt="Product"
          src={image}
        />
      ))}
    </Slider>
  );
}

export default Preview;
