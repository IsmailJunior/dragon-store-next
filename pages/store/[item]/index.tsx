import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { type IItemObject } from "@/types/item";
import { getItemDoc, getItemsDocs } from "@/utils/firebase";
import PhoneDetails from "@/components/item/phone/PhoneDetails";
interface IItemsPageProps {
  data: IItemObject;
}

function Page(props: IItemsPageProps) {
  const { data } = props;
  return (
    <Fragment>
      <NextSeo
        title={`${data.models[0].title}
          ${data.models[1] && `and ${data.models[1].title}`}`}
      />
      <div className="md:mx-auto md:w-150 xl:w-full flex justify-end container">
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col">
            <span className="text-sm self-end font-light md:text-base text-orange-700">
              جديد
            </span>
            <h1 className="text-4xl font-medium md:text-5xl">
              {data.title} اشتر
            </h1>
          </div>
          <p className="text-xs md:text-sm text-end">
            From ${data.price} or $41.62/mo. for 24 mo.*
          </p>
        </div>
      </div>
      <PhoneDetails data={data} />
    </Fragment>
  );
}

// export async function getServerSideProps(context: any) {
// 	const data = await getItemsDocs();
// 	const { req } = context;
// 	const { res } = context;
// 	console.log(req);
// 	return {
// 		props: { data },
// 	};
// }

export async function getStaticPaths() {
  const items = await getItemsDocs();
  return {
		fallback: false,
		paths:
			items &&
			items.map(item => ({
				params: { item: item.id.toString() },
			})),
  };
}
export async function getStaticProps(context: any) {
  const item = context.params.item;
  const data = await getItemDoc(item);
  return {
		props: { data },
  };
}

export default Page;
