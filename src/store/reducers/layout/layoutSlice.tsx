import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutInitial } from "../../../types/layoutSlice.type";

const initialState: ILayoutInitial = {
  selectedRoute: "/",
  showSpinner: false,
  showToast: false,
  errorMessage: "",
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
    setShowToast: (
      state: ILayoutInitial,
      { payload }: { payload: { text: string; isOpen: boolean } }
    ) => {
      state.errorMessage = payload.text;
      state.showToast = payload.isOpen;
    },
  },
});

export const { setSelectedRoute, setShowSpinner, setShowToast } =
  layoutSlice.actions;
export default layoutSlice.reducer;
