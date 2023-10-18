interface IHeadlineProps {
  title: string;
  description: string;
  size: string;
}

function Headline(props: IHeadlineProps) {
  const { title, description, size } = props;
  return (
    <h1 className={`${size} font-medium text-slate-500`}>
      <span className={`${size} text-black`}>{title}</span>
      {` ${description}`}
    </h1>
  );
}

export default Headline;
