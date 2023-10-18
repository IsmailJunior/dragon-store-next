import { useEffect, useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

interface ICategoryObject {
  image: string;
  title: string;
}

interface ICategoryProps {
  data: ICategoryObject;
}

function Category(props: ICategoryProps) {
  const { data } = props;
  const url = data.image;
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const mediaQuery = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
    }
  }, [mediaQuery, isMinWidthMedium]);

  return (
    <Fragment>
      <Image
        width={isMinWidthMedium ? 100 : 133}
        height={isMinWidthMedium ? 100 : 133}
        src={url}
        alt="Mac"
      />
      <h1>{data.title}</h1>
    </Fragment>
  );
}

export default Category;
