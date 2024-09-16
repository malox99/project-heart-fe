import { createSlice } from "@reduxjs/toolkit";
import { IFormInitial } from "../../../types/formSlice.type";

const initialState: IFormInitial & { [key: string]: string } = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
  name: "",
  surname: "",
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    handleInput: (
      state,
      { payload }: { payload: { name: string; value: string } }
    ) => {
      const { name, value } = payload;
      state[name] = value;
    },
    handleResetInput: () => initialState,
  },
});

export const { handleInput, handleResetInput } = formSlice.actions;
export default formSlice.reducer;
