import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILocationsInitial } from "../../../types/locationSlice.type";
import { getLocationsThunk } from "./locationsThunk";
import { LatLngExpression } from "leaflet";

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  getLocationsThunk
);

const initialState: ILocationsInitial = {
  startPosition: undefined,
  locations: [],
};

const locationsSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setStartPosition: (
      state: ILocationsInitial,
      action: PayloadAction<LatLngExpression>
    ) => {
      state.startPosition = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.fulfilled, (state, { payload }) => {
      state.locations = payload.data;
    });
  },
});

export const { setStartPosition } = locationsSlice.actions;
export default locationsSlice.reducer;
