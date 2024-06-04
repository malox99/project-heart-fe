import { Slider, Stack, Typography } from "@mui/material";
import React from "react";
import { setMaxDistance } from "../store/reducers/locations/locationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";

const FilterSlider = () => {
  const dispatch = useDispatch<any>();
  const { maxDistance } = useSelector((store: RootState) => store.locations);
  
  return (
    <Stack direction={"row"} alignItems={"center"} px={6}>
      <Typography variant="body2" mr={2}>
        Distanza massima:
      </Typography>
      <Slider
        defaultValue={maxDistance}
        min={5}
        max={100}
        step={5}
        sx={{ width: "200px" }}
        onChange={(el: any) => dispatch(setMaxDistance(el.target.value))}
      />
      <Typography variant="caption" ml={1}>
        {maxDistance} km
      </Typography>
    </Stack>
  );
};

export default FilterSlider;
