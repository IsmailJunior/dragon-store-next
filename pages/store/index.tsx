import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { type IStorePageObject } from "@/types/storePage";
import { getStoreDocs } from "@/utils/firebase";
import ContainerFluid from "@/components/ui/ContainerFluid";
import Categories from "@/components/store/Categories";
import Headline from "@/components/Headline";
import SequenceSection from "@/components/store/SequenceSection";
interface IStorePageProps {
  data: IStorePageObject[];
}

function StorePage(props: IStorePageProps) {
  const { data } = props;
  const categoryData = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635",
      title: "Mac",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190",
      title: "iPhone",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437",
      title: "iPad",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208",
      title: "Apple Watch",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
      title: "AirPods",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
      title: "AirTag",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
      title: "Apple TV 4K",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
      title: "HomePod",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692803114952",
      title: "Accessories",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054",
      title: "Apple Gift Card",
    },
  ];
  return (
    <Fragment>
      <NextSeo title="متجر دراكون - دراكون كروب" />
      <div className="mt-32 space-y-16">
        <ContainerFluid>
          <div className="w-80 md:w-116 ml-auto text-end">
            <Headline
              size="text-4xl"
              title="المتجر"
              description="افضل مكان لشراء المنتجات التي تحب"
            />
          </div>
        </ContainerFluid>
        <Categories data={categoryData} />
        {data.map((section, i) => (
          <SequenceSection key={i} data={section} />
        ))}
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
	const data = await getStoreDocs();
	return {
		props: { data },
	};
}
export default StorePage;
