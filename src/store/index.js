import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import catalogSettingsReducer from "./catalogSettingsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    catalogSettings: catalogSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});
