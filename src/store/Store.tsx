import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout/layoutSlice";
import locationsReducer from "./reducers/locations/locationsSlice";
import categoriesReducer from "./reducers/categories/categoriesSlice";
import tagsReducer from "./reducers/tags/tagsSlice";
import userReducer from "./reducers/user/userSlice";
import formReducer from "./reducers/form/formSlice";

const rootReducer = {
  layout: layoutReducer,
  locations: locationsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  user: userReducer,
  form: formReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
