import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILocation, ILocationsInitial } from "../../../types/locationSlice.type";
import { getLocationsThunk } from "./locationsThunk";

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  getLocationsThunk
);

const initialState: ILocationsInitial = {
  locations: [],
  selectedLocation: null
};

const locationsSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setSelectedLocation: (
      state: ILocationsInitial,
      action: PayloadAction<ILocation | null>
    ) => {
      state.selectedLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.fulfilled, (state, { payload }) => {
      state.locations = payload.data;
    });
  },
});

export const { setSelectedLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
