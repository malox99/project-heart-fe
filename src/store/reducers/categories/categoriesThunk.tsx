import authFetch from "../../../utils/axios";

export const getCategoriesThunk = async (_: string) => {
  const getCategoriesURL =
    "/locations/tagsAndCategories/category/getCategories";
  try {
    const res = await authFetch.get(getCategoriesURL);
    return res;
  } catch (error: any) {
    return error;
  }
};
