import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout/layoutSlice";

const rootReducer = {
  layout: layoutReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
