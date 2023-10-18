import { Fragment } from "react";
import { type IItemObject } from "@/types/item";
import FeaturedBannerWide from "@/components/landing/components/FeaturedBaannerWide";
interface IMainFeaturedBannersObject {
  primaryBanner: IItemObject;
  secondaryBanner: IItemObject;
  trinaryBanner: IItemObject;
}

interface IMainFeaturedBannersProps {
  data: IMainFeaturedBannersObject;
}

function MainFeaturedBanners(props: IMainFeaturedBannersProps) {
  const { data } = props;
  return (
    <Fragment>
      <FeaturedBannerWide data={data.primaryBanner} />
      <FeaturedBannerWide data={data.secondaryBanner} />
      <FeaturedBannerWide data={data.trinaryBanner} />
    </Fragment>
  );
}

export default MainFeaturedBanners;
