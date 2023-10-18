import { useEffect, useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { IItemObject } from "@/types/item";
import CompoundMobile from "@/components/item/phone/CompoundMobile";
import Compound from "./Compound";

interface IPhoneDetailsProps {
  data: IItemObject;
}

function PhoneDetails(props: IPhoneDetailsProps) {
  const { data } = props;
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const mediaQuery = useMediaQuery({ query: `(max-width: 460px)` });
  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
    }
  }, [mediaQuery, isMinWidthMedium]);
  return (
    <Fragment>
      {isMinWidthMedium ? (
        <CompoundMobile data={data} />
      ) : (
        <Compound data={data} />
      )}
    </Fragment>
  );
}

export default PhoneDetails;
