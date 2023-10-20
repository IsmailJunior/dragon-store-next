import { MouseEventHandler } from "react";

interface ISelectProps {
	id: string;
	name: string;
	headline: string | number;
	description?: string;
	details: string | number;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

function Select(props: ISelectProps) {
	const { id, name, headline, description, details, onClick } = props;
	return (
		<label className="cursor-pointer" htmlFor={id}>
			<div className="border flex justify-between border-gray-500 rounded-xl p-5 [&:has(input:checked)]:outline [&:has(input:checked)]:outline-blue-500 [&:has(input:checked)]:border-blue-500">
				<div className="flex flex-col gap-2">
					<span className="text-lg font-medium">{headline}</span>
					<span className="text-xs text-slate-500 font-light">
						{description}
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-xs text-slate-500 font-light">
						{details}
					</span>
				</div>
				<input
					onClick={onClick}
					className="hidden"
					type="radio"
					name={name}
					id={id}
				/>
			</div>
		</label>
	);
}

export default Select;
