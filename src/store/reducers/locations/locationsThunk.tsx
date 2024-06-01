import authFetch from "../../../utils/axios";
import { getFromSessionStorage } from "../../../utils/utils";

export const getLocationsThunk = async (_: string, thunkAPI: any) => {
  const getLocationsURL = "/locations/findNearLocationsAndAdress";
  const startPosition = getFromSessionStorage("startPosition");

  const body = { currentPoint: startPosition, maxDistance: 30 };

  try {
    const res = await authFetch.post(getLocationsURL, body);
    return res;
  } catch (error: any) {
    return error;
  }
};
