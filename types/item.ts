interface IItemSizeObject {
  mobile: string;
  desktop: string;
}

interface IItemBannerObject {
  portrait: IItemSizeObject;
  wide: IItemSizeObject;
}

interface IItemCardObject extends IItemSizeObject {}
interface IItemColorsObject {
  title: string;
  color: string;
  images: string[];
}

interface IItemBannerColorObject {
  title: string;
  description: string;
}

interface IItemBannerColorsObject {
  portrait: IItemBannerColorObject;
  wide: IItemBannerColorObject;
}

interface IItemCardColorsObject {
  title: string;
  description: string;
  subtitle: string;
  offer: string;
}
interface IItemTextColorsObject {
  title: string;
  description: string;
  banner: IItemBannerColorsObject;
  card: IItemCardColorsObject;
}

interface IItemModelObject {
  title: string;
  description: string;
  price: number;
  colors: IItemColorsObject[];
  images: string[];
}

interface IItemStorageObject {
  space: number;
  price: number;
}
export interface IItemObject {
	company: string;
	type: string;
	banner: IItemBannerObject;
	card: IItemCardObject;
	title: string;
	description: string;
	price: number;
	subtitle: string;
	models: IItemModelObject[];
	storages: IItemStorageObject[];
	images: string[];
	text_colors: IItemTextColorsObject;
	id: string;
}
