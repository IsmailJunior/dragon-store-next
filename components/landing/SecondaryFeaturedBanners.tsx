import { type ILandingPageObject } from "@/types/landingPage";
import { Fragment } from "react";
import FeaturedBannerPortrait from "@/components/landing/components/FeaturedBaannerPortrait";
interface ISecondaryFeaturedBannersProps {
	data: ILandingPageObject;
}

function SecondaryFeaturedBanners(props: ISecondaryFeaturedBannersProps) {
	const { data } = props;
	return (
		<Fragment>
			<div className="md:flex md:gap-2 lg:w-full md:px-2">
				<FeaturedBannerPortrait
					data={data.primaryBannerLeftSideBanner}
				/>
				<FeaturedBannerPortrait
					data={data.primaryBannerRightSideBanner}
				/>
			</div>
			<div className="md:flex md:gap-2 lg:w-full md:px-2">
				<FeaturedBannerPortrait
					data={data.secondaryBannerLeftSideBanner}
				/>
				<FeaturedBannerPortrait
					data={data.secondaryBannerRightSideBanner}
				/>
			</div>
			<div className="md:flex md:gap-2 lg:w-full md:px-2">
				<FeaturedBannerPortrait
					data={data.trinaryBannerLeftSideBanner}
				/>
				<FeaturedBannerPortrait
					data={data.trinaryBannerRightSideBanner}
				/>
			</div>
		</Fragment>
	);
}

export default SecondaryFeaturedBanners;
