import Select from "../components/controls/Select";

export default {
	title: "Select",
	component: Select,
};

const Template = (args: any) => <Select {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	id: "Test",
	name: "Name",
	headline: "Test",
	description: "Test",
	details: "Test",
};
