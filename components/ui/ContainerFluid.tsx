import { ReactNode } from "react";

interface IContainerFluid {
  children: ReactNode;
}

function ContainerFluid(props: IContainerFluid) {
  const { children } = props;
  return <div className="container">{children}</div>;
}

export default ContainerFluid;
