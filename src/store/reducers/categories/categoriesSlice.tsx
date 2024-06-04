import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICategoriesInitial } from "../../../types/categoriesSlice.type";
import { getCategoriesThunk } from "./categoriesThunk";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  getCategoriesThunk
);

const initialState: ICategoriesInitial = {
  categories: [],
  categoriesSelected: []
};

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setCategoriesSelected: (state, {payload}) => {
      state.categoriesSelected = payload
    },
    resetCategories: (state) => {
      state.categories = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload.data;
    });
  },
});

export const { setCategoriesSelected, resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
