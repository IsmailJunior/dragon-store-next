import { type IItemObject } from "@/types/item";
import Swiper from "@/components/Swiper";
import Card from "@/components/store/components/Card";

interface ISequenceProps {
  data: IItemObject[];
}

function Sequence(props: ISequenceProps) {
  const { data } = props;
  return (
    <Swiper>
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </Swiper>
  );
}

export default Sequence;
