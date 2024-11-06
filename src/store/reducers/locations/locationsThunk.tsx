import authFetch from "../../../utils/axios";
import { getFromSessionStorage } from "../../../utils/utils";

export const getLocationsThunk = async (_: string, thunkAPI: any) => {
  const getLocationsURL = "/v1/locations/findNearLocationsAndAddress";
  const startPosition = getFromSessionStorage("startPosition");
  const maxDistance = thunkAPI.getState().locations.maxDistance;
  const { categoriesSelected } = thunkAPI.getState().categories;
  const { tagsSelected } = thunkAPI.getState().tags;

  const body = {
    currentPoint: startPosition,
    maxDistance,
    categories: categoriesSelected,
    tags: tagsSelected,
  };

  try {
    const res = await authFetch.post(getLocationsURL, body);
    return res;
  } catch (error: any) {
    return error;
  }
};

export const getLocationDetailThunk = async (id: string, thunkAPI: any) => {
  const getLocationsURL = `/v1/locations/getLocationById/${id}`;

  try {
    const res = await authFetch.get(getLocationsURL);
    return res;
  } catch (error: any) {
    return error;
  }
};
