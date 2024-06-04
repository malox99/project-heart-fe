import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import FilterSlider from "../../../components/FilterSlider.component";
import { setCategoriesSelected } from "../../../store/reducers/categories/categoriesSlice";
import { setTagsSelected } from "../../../store/reducers/tags/tagsSlice";

const MainZoneViewFilters = () => {
  const dispatch = useDispatch<any>();
  const { categories, categoriesSelected } = useSelector(
    (store: RootState) => store.categories
  );
  const { tags, tagsSelected } = useSelector((store: RootState) => store.tags);

  return (
    <Stack direction={"row"} alignItems={"center"} gap={2} mb={2}>
      <Stack>
        <Typography variant="body2" mb={0.5}>
          Categories
        </Typography>
        <Select
          sx={{ minWidth: "250px" }}
          value={categoriesSelected}
          multiple
          onChange={(el) => dispatch(setCategoriesSelected(el.target.value))}
        >
          {categories.map((el, idx) => (
            <MenuItem key={idx} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack>
        <Typography variant="body2" mb={0.5}>
          Tags
        </Typography>
        <Select
          sx={{ minWidth: "250px" }}
          value={tagsSelected}
          multiple
          onChange={(el) => dispatch(setTagsSelected(el.target.value))}
        >
          {tags.map((el, idx) => (
            <MenuItem key={idx} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <FilterSlider />
    </Stack>
  );
};

export default MainZoneViewFilters;
