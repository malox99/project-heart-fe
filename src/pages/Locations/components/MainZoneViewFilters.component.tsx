import { MenuItem, Select, Stack } from "@mui/material";

const MainZoneViewFilters = () => {
  return (
    <Stack direction={'row'} gap={2} mb={2}>
      <Select fullWidth>
        <MenuItem></MenuItem>
      </Select>
      <Select fullWidth>
        <MenuItem></MenuItem>
      </Select>
      <Select fullWidth>
        <MenuItem></MenuItem>
      </Select>
      <Select fullWidth>
        <MenuItem></MenuItem>
      </Select>
    </Stack>
  );
};

export default MainZoneViewFilters;
