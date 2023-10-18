import { type IItemObject } from "@/types/item";
import ContainerFluid from "@/components/ui/ContainerFluid";
import Headline from "@/components/Headline";
import Sequence from "@/components/store/Sequence";

interface ISequenceSectionObject {
  title: string;
  description: string;
  items: IItemObject[];
}

interface ISequenceSectionProps {
  data: ISequenceSectionObject;
}

function SequenceSection(props: ISequenceSectionProps) {
  const { data } = props;
  return (
    <section className="text-xs">
      <ContainerFluid>
        <div className="w-80 md:w-116 ml-auto text-end">
          <Headline
            size="text-3xl"
            title={data.title}
            description={data.description}
          />
        </div>
      </ContainerFluid>
      <Sequence data={data.items} />
    </section>
  );
}
export default SequenceSection;
