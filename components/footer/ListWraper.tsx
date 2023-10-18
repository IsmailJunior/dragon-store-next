import { ReactNode } from "react";

interface IListWraperProps {
  children: ReactNode;
}

function ListWraper(props: IListWraperProps) {
  const { children } = props;
  return <div className="space-y-2 md:space-y-6 md:basis-1/4">{children}</div>;
}
export default ListWraper;
