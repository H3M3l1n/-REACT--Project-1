import { createSlice } from "@reduxjs/toolkit";

const catalogSettingsSlice = createSlice({
  name: "catalogSettings",
  initialState: {
    category: "",
    subCategory: "",
  },
  reducers: {
    setCategory(state, action) {
      state.category = {
        id: action.payload.id,
      };
      state.subCategory = {
        id: "",
      };
    },
    setSubCategory(state, action) {
      state.category = {
        id: action.payload.categoryId,
      };
      state.subCategory = {
        id: action.payload.id,
      };
    },
    resetCatalogSettings(state) {
      state.category = {
        id: "",
      };
      state.subCategory = {
        id: "",
      };
    },
  },
});

export const { setCategory, setSubCategory, resetCatalogSettings } =
  catalogSettingsSlice.actions;

export default catalogSettingsSlice.reducer;
