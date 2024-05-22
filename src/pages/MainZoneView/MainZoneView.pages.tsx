import { Grid, Stack } from "@mui/material";
import MapContainerMain from "../../components/MapContainer/MapContainerMain.page";
import ListItem from "../../components/ListItem/ListItem.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/reducers/locations/locationsSlice";
import { RootState } from "../../store/Store";

const MainZoneView = () => {
  const dispatch = useDispatch<any>();
  const { startPosition, locations } = useSelector(
    (state: RootState) => state.locations
  );

  useEffect(() => {
    dispatch(getLocations(""));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Stack spacing={2}>
          {locations?.length > 0 &&
            locations.map((location, idx) => (
              <ListItem
                key={idx}
                title={location.name}
                category={
                  location.category.length > 0
                    ? location.category[0]
                    : undefined
                }
              />
            ))}
        </Stack>
      </Grid>
      <Grid item xs={8}>
        {startPosition && (
          <MapContainerMain
            height="calc(100vh - 144px)"
            center={startPosition}
            locations={locations}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default MainZoneView;
