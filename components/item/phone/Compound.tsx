import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { type IItemObject } from "@/types/item";
import {
	selectIsModelSelected,
	selectModel,
	selectImages,
} from "@/features/item/itemSlice";
import Headline from "@/components/Headline";
import Preview from "@/components/item/components/Preview";
import SelectColor from "@/components/controls/SelectColor";
import Select from "@/components/controls/Select";

interface ICompoundColorsObject {
	title: string;
	color: string;
	images: string[];
}
interface ICompoundProps {
	data: IItemObject;
}

interface ISelected {
	title: string;
	images: string[];
	colorTitle: string;
	colors: ICompoundColorsObject[];
	price: number;
	isModelChecked: boolean;
	isColorChecked: boolean;
}

interface ISelectedColor {
	images: string[];
	colorTitle: string;
	isColorChecked: boolean;
}

function CompoundMobile(props: ICompoundProps) {
	const { data } = props;

	const dispatch = useDispatch();
	const isModelSelected = useSelector(selectIsModelSelected);
	const images = useSelector(selectImages);
	const [selected, setSelected] = useState({
		title: data.title,
		colorTitle: " ",
		images: data.images,
		colors: data.models[0].colors,
		price: data.price,
		isModelChecked: false,
		isColorChecked: false,
	});
	const [prevValue, setPrevValue] = useState(selected);
	const colors = data.models
		.filter(model => model.title === selected.title)
		.at(0)?.colors;
	useEffect(() => {
		setPrevValue(selected);
		setSelected(selected);
	}, [selected, prevValue]);
	const handleOnClick = (args: any) => {
		dispatch(selectModel({ selectedModel: args, isModelSelected: true }));
		setSelected({ ...args, isModelChecked: isModelSelected });
	};
	return (
		<div className="flex flex-col xl:flex-row-reverse container md:w-150 xl:w-full">
			<div className="xl:sticky top-20 xl:self-start xl:mt-12 xl:pl-8 xl:max-w-4xl hidden xl:block">
				<Preview data={selected.images} />
			</div>
			<div className="flex flex-col xl:mx-auto gap-7">
				<div className="flex flex-col gap-5">
					<div className="order-2  xl:pr-8 xl:max-w-4xl xl:hidden">
						<Preview data={selected.images} />
					</div>
					<div className="mt-10">
						<Headline
							size="text-2xl"
							title="النموذج."
							description="ماهو الافضل بالنسبة لك؟"
						/>
					</div>
					<div className="flex flex-col gap-5">
						{data.models.map((model, index) => (
							<div key={index}>
								<Select
									id={uuid()}
									name="model"
									headline={model.title}
									description={model.description}
									details={model.price}
									onClick={() => handleOnClick(model)}
								/>
							</div>
						))}
					</div>
				</div>
				<div
					className={`flex flex-col gap-4 xl:gap-7 ${
						!isModelSelected
							? "pointer-events-none opacity-30"
							: null
					}`}
				>
					<div className="order-2 mt-2 overflow-hidden md:mt-12 xl:pr-8 xl:max-w-4xl xl:hidden">
						<Preview data={selected.images} />
					</div>
					<div>
						<div className="mt-20">
							<Headline
								size="text-2xl"
								title="اللون."
								description="إختر ماتفضل"
							/>
						</div>
						<div className="flex flex-col mt-5 gap-7">
							<h1 className="font-semibold">
								{`${
									selected.colorTitle
										? selected.colorTitle
										: " "
								} -`}{" "}
								اللون
							</h1>
							<div className="flex gap-5">
								{colors?.map((color, index) => (
									<SelectColor
										isActive={
											isModelSelected ? true : false
										}
										changedData={(
											selected: ISelectedColor
										) =>
											setSelected({
												...prevValue,
												images: selected.images,
												colorTitle: selected.colorTitle,
												isColorChecked:
													selected.isColorChecked,
											})
										}
										key={index}
										id={uuid()}
										name="colors"
										colorTitle={color.title}
										color={color.color}
										images={color.images}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<div
					className={`flex flex-col gap-5 ${
						!selected.isColorChecked
							? "pointer-events-none opacity-30"
							: null
					}`}
				>
					<div className="mt-20">
						<Headline
							size="text-2xl"
							title="المساحة."
							description="كم من المساحة تحتاج؟"
						/>
					</div>
					{data.storages.map((storage, index) => (
						<Select
							key={index}
							id={uuid()}
							name="storage"
							headline={storage.space}
							details={storage.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CompoundMobile;
