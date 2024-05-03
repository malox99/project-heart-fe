import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutInitial } from "../../../types/layoutSlice.type";

const initialState: ILayoutInitial = {
  isOpen: false,
  selectedRoute: "/",
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setIsOpenSidebar: (
      state: ILayoutInitial,
      action: PayloadAction<boolean>
    ) => {
      state.isOpen = action.payload;
    },
    setSelectedRoute: (
      state: ILayoutInitial,
      action: PayloadAction<string>
    ) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { setIsOpenSidebar, setSelectedRoute } = layoutSlice.actions;
export default layoutSlice.reducer
