import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILocation, ILocationsInitial } from "../../../types/locationSlice.type";
import { getLocationDetailThunk, getLocationsThunk } from "./locationsThunk";

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  getLocationsThunk
);

export const getLocationDetail = createAsyncThunk(
  "locations/getLocationDetail",
  getLocationDetailThunk
);

const initialState: ILocationsInitial = {
  locations: [],
  locationDetail: null,
  selectedLocation: null,
  maxDistance: 5
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
    setMaxDistance: (
      state: ILocationsInitial,
      action: PayloadAction<number>
    ) => {
      state.maxDistance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.fulfilled, (state, { payload }) => {
      state.locations = payload.data;
    })
    builder.addCase(getLocationDetail.fulfilled, (state, { payload }) => {      
      state.locationDetail = payload.data;
    });
  },
});

export const { setSelectedLocation, setMaxDistance } = locationsSlice.actions;
export default locationsSlice.reducer;
