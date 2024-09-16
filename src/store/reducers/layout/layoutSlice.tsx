import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutInitial } from "../../../types/layoutSlice.type";

const initialState: ILayoutInitial = {
  selectedRoute: "/",
  showSpinner: false,
  toast: {
    show: false,
    message: "",
    status: "success",
  },
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
      {
        payload,
      }: {
        payload: { text: string; isOpen: boolean; status: "success" | "error" };
      }
    ) => {
      const { isOpen, status, text } = payload;
      state.toast = {
        show: isOpen,
        message: text,
        status,
      };
    },
  },
});

export const { setSelectedRoute, setShowSpinner, setShowToast } =
  layoutSlice.actions;
export default layoutSlice.reducer;
