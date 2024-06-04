import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout/layoutSlice";
import locationsReducer from "./reducers/locations/locationsSlice";
import categoriesReducer from "./reducers/categories/categoriesSlice";
import tagsReducer from "./reducers/tags/tagsSlice";

const rootReducer = {
  layout: layoutReducer,
  locations: locationsReducer,
  categories: categoriesReducer,
  tags: tagsReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
