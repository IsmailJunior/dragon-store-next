import Link from "next/link";
import { type IItemObject } from "@/types/item";
import FeturedImagePortrait from "@/components/landing/components/FeaturedImagePortrait";
interface IFeaturedBannerProps {
  data: IItemObject;
}

function FeaturedBannerPortrait(props: IFeaturedBannerProps) {
  const { data } = props;
  return (
		<Link
			href={`store/${data.id}`}
			className="relative h-116 w-full flex justify-center items-start mb-2 md:h-120"
		>
			<div className="z-10 mt-10 text-center md:mt-20">
				<h1
					style={{ color: data.text_colors?.banner?.portrait.title }}
					className="text-3xl md:text-4xl font-medium"
				>
					{data.title}
				</h1>
				<p
					style={{
						color: data.text_colors?.banner?.portrait.description,
					}}
					className="w-80 md:w-96 lg:w-116 text-lg md:text-xl lg:text-2xl font-light"
				>
					{data.description}
				</p>
				<div className="text-lg text-blue-500 flex justify-center items-center space-x-2">
					<p className="hover:underline">Shop Now</p>
					<span>{">"}</span>
				</div>
			</div>
			<FeturedImagePortrait data={data} />
		</Link>
  );
}

export default FeaturedBannerPortrait;
