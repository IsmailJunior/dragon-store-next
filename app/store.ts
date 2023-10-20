import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "@/features/item/itemSlice";

const store = configureStore({
	reducer: {
		item: itemSliceReducer,
	},
});

export default store;
