import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout/layoutSlice";
import locationsReducer from "./reducers/locations/locationsSlice";

const rootReducer = {
  layout: layoutReducer,
  locations: locationsReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
