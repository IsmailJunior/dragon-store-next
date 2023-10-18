import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { type IItemObject } from "@/types/item";
import Headline from "@/components/Headline";
import PreviewMobile from "@/components/item/components/PreviewMobile";
import SelectModel from "@/components/controls/SelectModel";
import SelectStorage from "@/components/controls/SelectStorage";
import SelectColor from "@/components/controls/SelectColor";

interface ICompoundColorsObject {
  title: string;
  color: string;
  images: string[];
}
interface ICompoundProps {
  data: IItemObject;
}

interface ISelected {
  title: string;
  images: string[];
  colorTitle: string;
  colors: ICompoundColorsObject[];
  price: number;
  isModelChecked: boolean;
  isColorChecked: boolean;
}

interface ISelectedColor {
  images: string[];
  colorTitle: string;
  isColorChecked: boolean;
}

function CompoundMobile(props: ICompoundProps) {
  const { data } = props;
  const [selected, setSelected] = useState({
    title: data.title,
    colorTitle: " ",
    images: data.images,
    colors: data.models[0].colors,
    price: data.price,
    isModelChecked: false,
    isColorChecked: false,
  });
  const [prevValue, setPrevValue] = useState(selected);
  const colors = data.models
    .filter(model => model.title === selected.title)
    .at(0)?.colors;
  useEffect(() => {
    setPrevValue(selected);
    setSelected(selected);
  }, [selected, prevValue]);
  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className="flex flex-col">
          <div className="container mt-6">
            <Headline
              size="text-2xl"
              title="Model."
              description="Which is best for you?"
            />
          </div>
          <div className="mt-2 md:mt-12 pr-20">
            <PreviewMobile data={selected.images} />
          </div>
        </div>
        <div className="flex flex-col mt-4 px-4 gap-3">
          {data.models.map((model, index) => (
            <SelectModel
              changedData={(selected: ISelected) => setSelected(selected)}
              id={uuid()}
              key={index}
              name="model"
              title={model.title}
              subtitle={model.description}
              price={model.price}
              images={model.images}
              colors={model.colors}
            />
          ))}
        </div>
      </div>
      <div>
        <div
          className={`${
            !selected.isModelChecked ? "pointer-events-none opacity-30" : null
          }`}
        >
          <div className="flex flex-col">
            <div className="container mt-6">
              <Headline
                size="text-2xl"
                title="Finish."
                description="Pick your favorite."
              />
            </div>
            <div className="mt-2 pr-20">
              <PreviewMobile data={selected.images} />
            </div>
          </div>
          <div className="flex flex-col mt-4 px-4 gap-6">
            <h1 className="font-semibold">
              Color {` - ${selected.colorTitle ? selected.colorTitle : " "}`}
            </h1>{" "}
            <div className="flex gap-5">
              {colors?.map((color, index) => (
                <SelectColor
                  isActive={selected.isModelChecked ? true : false}
                  changedData={(selected: ISelectedColor) =>
                    setSelected({
                      ...prevValue,
                      images: selected.images,
                      colorTitle: selected.colorTitle,
                      isColorChecked: selected.isColorChecked,
                    })
                  }
                  key={index}
                  id={uuid()}
                  name="colors"
                  colorTitle={color.title}
                  color={color.color}
                  images={color.images}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          !selected.isColorChecked ? "pointer-events-none opacity-30" : null
        }`}
      >
        <div>
          <div className="container mt-6">
            <Headline
              size="text-2xl"
              title="Storage."
              description="How much space do you need?"
            />
          </div>
        </div>
        <div className="flex flex-col px-4 mt-5 gap-3">
          {data.storages.map((storage, index) => (
            <SelectStorage
              isActive={selected.isColorChecked ? true : false}
              id={uuid()}
              key={index}
              name="storage"
              space={storage.space}
              price={storage.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompoundMobile;
