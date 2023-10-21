import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModelSelected: false,
	selectedModel: {},
	images: [],
};

const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		selectModel: (state, action) => {
			state.isModelSelected = action.payload.isModelSelected;
			state.selectedModel = action.payload.selectedModel;
			state.images = action.payload.images;
		},
	},
});

export const { selectModel } = itemSlice.actions;
export const selectIsModelSelected = (state: any) => state.item.isModelSelected;
export const selectSelectedModel = (state: any) => state.item.selectedModel;
export const selectImages = (state: any) => state.item.images;
export default itemSlice.reducer;
