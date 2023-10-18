import classes from "./Select.module.css";

interface ISelectColorObject {
  title: string;
  color: string;
  images: string[];
}

interface ISelectProps {
  id: string;
  name: string;
  title?: string;
  space?: number;
  subtitle?: string;
  price: number;
  colorTitle?: string;
  images?: string[];
  colors?: ISelectColorObject[];
  changedData?: Function;
}
function SelectModel(props: ISelectProps) {
  const {
    name,
    id,
    images,
    colorTitle,
    colors,
    title,
    subtitle,
    price,
    space,
    changedData,
  } = props;
  return (
    <label className={classes.select} htmlFor={id}>
      <div className="flex items-center justify-between p-4">
        <input
          onClick={() =>
            changedData &&
            changedData({
              images,
              colorTitle,
              colors,
              price,
              title,
              isModelChecked: true,
            })
          }
          id={id}
          type="radio"
          name={name}
        />
        <div className="flex flex-col justify-center">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-lg font-semibold">{space && space + "GB"}</span>
          <span className="text-xs">{subtitle}</span>
        </div>
        <div className="w-20 text-xs text-right">
          <p>${price}</p>
        </div>
      </div>
    </label>
  );
}

export default SelectModel;
