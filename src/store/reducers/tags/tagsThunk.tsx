import authFetch from "../../../utils/axios";

export const getTagsThunk = async (_: string) => {
  const getTagsURL = "/v1/locations/tagsAndCategories/tags/getTags";
  try {
    const res = await authFetch.get(getTagsURL);
    return res;
  } catch (error: any) {
    return error;
  }
};
