import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserInitial } from "../../../types/userSlice.type";
import { loginThunk, signUpThunk } from "./userThunk";
import { setToSessionStorage } from "../../../utils/utils";

const initialState: IUserInitial = {
  data: null,
  isCompletedSignUp: false,
};

export const login = createAsyncThunk("user/login", loginThunk);
export const signUp = createAsyncThunk("user/signUp", signUpThunk);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.data = payload;
    },
    setIsCompletedSignUp: (state, { payload }) => {
      state.isCompletedSignUp = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.data = payload;
      setToSessionStorage("user", payload ? JSON.stringify(payload) : null);
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isCompletedSignUp = true;
    });
  },
});

export const { setUserData, setIsCompletedSignUp } = userSlice.actions;
export default userSlice.reducer;
