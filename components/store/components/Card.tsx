import { type IItemObject } from "@/types/item";
import Link from "next/link";

interface ICardProps {
  data: IItemObject;
}

function Card(props: ICardProps) {
  const { data } = props;
  return (
		<Link
			href={`store/${data.id}`}
			className="relative h-116 w-80 md:w-96 mt-6 overflow-hidden rounded-3xl shadow-lg"
		>
			<div className="absolute flex flex-col gap-2 h-96 z-10 p-7">
				<h1
					className="text-xm md:text-sm uppercase h-5"
					style={{ color: data.text_colors.card.title }}
				>
					{data.title}
				</h1>
				<div className="text-xl w-72 md:text-2xl md:w-full font-medium">
					<h1 style={{ color: data.text_colors.card.subtitle }}>
						{data.subtitle}
					</h1>
				</div>
				<p
					className="text-base w-52 md:w-80"
					style={{ color: data.text_colors.card.description }}
				>
					{data.description}
				</p>
			</div>
			<figure
				className="absolute w-80 h-116 top-0 left-0 z-0 bg-cover bg-no-repeat bg-center md:w-96"
				style={{ backgroundImage: `url(${data.card.desktop})` }}
			/>
		</Link>
  );
}

export default Card;
