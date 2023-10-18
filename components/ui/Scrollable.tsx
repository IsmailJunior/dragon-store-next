import { ReactNode } from "react";

interface IScrollableProps {
  children: ReactNode;
}

function Scrollable(props: IScrollableProps) {
  const { children } = props;
  return (
		<div className="overscroll-x-contain overflow-y-hidden w-screen overflow-x-auto no-scrollbar snap-x snap-mandatory pb-5">
			<div className="w-max inline-flex">{children}</div>
		</div>
  );
}

export default Scrollable;
