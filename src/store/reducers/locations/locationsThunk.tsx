import authFetch from "../../../utils/axios";

export const getLocationsThunk = async (_: string, thunkAPI: any) => {
  const getLocationsURL = "/locations/findNearLocations";
  const { startPosition } = thunkAPI.getState().locations;

  const body = { currentPoint: startPosition, maxDistance: 30 };

  try {
    const res = await authFetch.post(getLocationsURL, body);
    return res;
  } catch (error: any) {
    return error;
  }
};
