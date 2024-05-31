import { Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../../components/ListItem/ListItem.component";
import MapContainerMain from "../../components/MapContainer/MapContainerMain.page";
import { RootState } from "../../store/Store";
import { getLocations } from "../../store/reducers/locations/locationsSlice";
import { ILocationAddress } from "../../types/locationSlice.type";
import MainZoneViewFilters from "./components/MainZoneViewFilters.component";

const MainZoneView = () => {
  const dispatch = useDispatch<any>();
  const { startPosition, locations } = useSelector(
    (state: RootState) => state.locations
  );

  useEffect(() => {
    dispatch(getLocations(""));
  }, []);

  return (
    <>
      <MainZoneViewFilters />
      <Grid container spacing={2} height={"100%"}>
        <Grid item xs={4}>
          <Stack spacing={2}>
            {locations?.length > 0 &&
              locations.map(({ location, address }: ILocationAddress, idx) => (
                <ListItem
                  key={idx}
                  address={address}
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
              height="100%"
              center={startPosition}
              locations={locations}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MainZoneView;
