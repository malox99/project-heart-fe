import authFetch from "../../../utils/axios";
import { getFromSessionStorage } from "../../../utils/utils";

export const getLocationsThunk = async (_: string, thunkAPI: any) => {
  const getLocationsURL = "/locations/findNearLocationsAndAddress";
  const startPosition = getFromSessionStorage("startPosition");
  const maxDistance = thunkAPI.getState().locations.maxDistance;

  const body = { currentPoint: startPosition, maxDistance };

  try {
    const res = await authFetch.post(getLocationsURL, body);
    return res;
  } catch (error: any) {
    return error;
  }
};

export const getLocationDetailThunk = async (id: string, thunkAPI: any) => {
  const getLocationsURL = `/locations/getLocationById/${id}`;

  try {
    const res = await authFetch.get(getLocationsURL);
    return res;
  } catch (error: any) {
    return error;
  }
};
