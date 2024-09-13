import { IBodyLogin } from "../../../types/userSlice.type";
import authFetch from "../../../utils/axios";

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

export const signUpThunk = async (id: string, thunkAPI: any) => {
  const signUpURL = `/locations/getLocationById/${id}`;
  const body = {};

  try {
    const res = await authFetch.get(signUpURL, body);

    return res;
  } catch (error: any) {
    return error;
  }
};
