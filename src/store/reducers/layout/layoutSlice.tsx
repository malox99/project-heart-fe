import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutInitial } from "../../../types/layoutSlice.type";

const initialState: ILayoutInitial = {
  selectedRoute: "/",
  showSpinner: false,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setSelectedRoute: (
      state: ILayoutInitial,
      action: PayloadAction<string>
    ) => {
      state.selectedRoute = action.payload;
    },
    setShowSpinner: (state: ILayoutInitial, action: PayloadAction<boolean>) => {
      state.showSpinner = action.payload;
    },
  },
});

export const { setSelectedRoute, setShowSpinner } = layoutSlice.actions;
export default layoutSlice.reducer;
