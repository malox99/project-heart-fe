import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITagsInitial } from "../../../types/tagsSlice.type";
import { getTagsThunk } from "./tagsThunk";

export const getTags = createAsyncThunk(
  "tags/getTags",
  getTagsThunk
);


const initialState: ITagsInitial = {
  tags: [],
  tagsSelected: []
};

const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    setTagsSelected: (state, {payload}) => {
      state.tagsSelected = payload
    },
    resetTags: (state) => {
      state.tags = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTags.fulfilled, (state, { payload }) => {
      state.tags = payload.data;
    });
  },
});

export const { setTagsSelected, resetTags } = tagsSlice.actions;
export default tagsSlice.reducer;
