import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

function Container(props: IContainerProps) {
  const { children } = props;
  return <div className="container max-w-5xl mx-auto">{children}</div>;
}

export default Container;
