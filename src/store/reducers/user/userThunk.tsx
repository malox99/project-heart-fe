import { IBodyLogin } from "../../../types/userSlice.type";
import authFetch from "../../../utils/axios";
import { handleResetInput } from "../form/formSlice";

export const loginThunk = async (_: string, thunkAPI: any) => {
  const loginURL = "/auth/signIn";
  const { username, password } = thunkAPI.getState().form;

  const body: IBodyLogin = {
    username,
    password,
  };

  try {
    const res = await authFetch.post(loginURL, body);
    return res.data;
  } catch (error: any) {
    return error;
  }
};

export const signUpThunk = async (_: string, thunkAPI: any) => {
  const signUpURL = `/auth/signUp`;
  const { name, surname, email, phoneNumber, username, password } =
    thunkAPI.getState().form;

  const body = {
    name,
    surname,
    username,
    phone: phoneNumber,
    email,
    password,
    role: ["user"],
  };

  try {
    const res = await authFetch.post(signUpURL, body);
    thunkAPI.dispatch(handleResetInput())
    thunkAPI.navigate(-1)
    return res;
  } catch (error: any) {
    return error;
  }
};
