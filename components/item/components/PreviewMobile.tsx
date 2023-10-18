import Image from "next/image";
import Swiper from "@/components/Swiper";
interface IPreviewMobileProps {
  data: string[];
}

function PreviewMobile(props: IPreviewMobileProps) {
  const { data } = props;
  return (
    <>
      <Swiper width={320}>
        {data.map((image, index) => (
          <div
            className="overflow-hidden h-auto w-auto rounded-xl border flex items-center justify-center"
            key={index}
          >
            <Image
              className="max-w-lg object-cover"
              width={320}
              height={200}
              alt="Product"
              src={image}
            />
          </div>
        ))}
      </Swiper>
    </>
  );
}

export default PreviewMobile;
