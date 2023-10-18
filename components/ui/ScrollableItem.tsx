import { ReactNode } from "react";

interface IScrollableItem {
  children: ReactNode;
  width?: number;
}

function ScrollableItem(props: IScrollableItem) {
  const { children, width } = props;
  const INT = width && 5 * (width / 10);
  return (
		<div className="snap-start h-52">
			<div
				className="flex flex-col justify-center items-center gap-5 pr-3"
				style={{
					transform: `translateX(calc(max(1024px, 100vw)/2 - ${
						width && INT ? 325 + INT : "485"
					}px))`,
				}}
			>
				{children}
			</div>
		</div>
  );
}

export default ScrollableItem;
