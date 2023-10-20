import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModelSelected: false,
	selectedModel: {},
};

const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		selectModel: (state, action) => {
			state.isModelSelected = action.payload.isModelSelected;
			state.selectedModel = action.payload.selectedModel;
		},
	},
});

export const { selectModel } = itemSlice.actions;
export const selectIsModelSelected = (state: any) => state.item.isModelSelected;
export const selectSelectedModel = (state: any) => state.item.selectedModel;
export default itemSlice.reducer;
