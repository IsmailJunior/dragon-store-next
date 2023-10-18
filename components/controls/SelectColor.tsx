import classes from "./SelectColor.module.css";
interface ISelectColorProps {
  id: string;
  colorTitle: string;
  name: string;
  color: string;
  images: string[];
  changedData: Function;
  isActive: boolean;
}
function SelectColor(props: ISelectColorProps) {
  const { changedData, name, color, images, id, colorTitle, isActive } = props;
  return (
    <label className={classes.select} htmlFor={id}>
      <input
        disabled={!isActive ? true : false}
        onClick={() =>
          changedData({ images, colorTitle, isColorChecked: true })
        }
        id={id}
        type="radio"
        name={name}
      />
      <div
        className="w-8 h-8 bg-center rounded-full bg-cover bg-no-repeat overflow-clip shadow-[inset_0_1px_1px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundImage: `url(${color})`,
        }}
      ></div>
    </label>
  );
}

export default SelectColor;
