import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserInitial } from "../../../types/userSlice.type";
import { loginThunk } from "./userThunk";

const initialState: IUserInitial = {
  data: null,
};

export const login = createAsyncThunk("user/login", loginThunk);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.data = payload
    });
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
