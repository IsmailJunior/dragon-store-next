import { Fragment } from "react";
import Head from "next/head";
import { type ILandingPageObject } from "@/types/landingPage";
import { getLandingDocs } from "@/utils/firebase";
import MainFeaturedBanners from "@/components/landing/MainFeaturedBanners";
import SecondaryFeaturedBanners from "@/components/landing/SecondaryFeaturedBanners";
interface ILandingBannerProps {
	data: ILandingPageObject;
}
function HomePage(props: ILandingBannerProps) {
	const { data } = props;
	return (
		<Fragment>
			<Head>
				<title>دراكون</title>
			</Head>
			<MainFeaturedBanners data={data} />
			<SecondaryFeaturedBanners data={data} />
		</Fragment>
	);
}

export async function getStaticProps() {
  const data = await getLandingDocs();
  return {
	  props: { data },
	  revalidate: 600
  };
}
export default HomePage;
