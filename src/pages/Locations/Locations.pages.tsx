import { Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../../components/ListItem/ListItem.component";
import MapContainerMain from "../../components/MapContainer/MapContainerMain.page";
import { RootState } from "../../store/Store";
import {
  getLocations,
  setSelectedLocation,
} from "../../store/reducers/locations/locationsSlice";
import { ILocationAddress } from "../../types/locationSlice.type";
import MainZoneViewFilters from "./components/MainZoneViewFilters.component";
import { useNavigate } from "react-router";
import { getFromSessionStorage } from "../../utils/utils";
import { getTags, resetTags } from "../../store/reducers/tags/tagsSlice";
import {
  getCategories,
  resetCategories,
} from "../../store/reducers/categories/categoriesSlice";

const Locations = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { locations } = useSelector((state: RootState) => state.locations);

  const startPosition = getFromSessionStorage("startPosition");

  useEffect(() => {
    dispatch(getLocations(""));
    dispatch(getTags(""));
    dispatch(getCategories(""));
    return () => {
      dispatch(setSelectedLocation(null));
      dispatch(resetCategories());
      dispatch(resetTags());
    };
  }, []);

  return (
    <>
      <MainZoneViewFilters />
      <Grid container spacing={2} height={"100%"} mt={0.5}>
        <Grid item xs={4}>
          <Stack
            spacing={2}
            p={"8px 8px 8px 0"}
            maxHeight={"calc(100vh - 258px)"}
            overflow={"auto"}
            sx={{
              "& ::-webkit-scrollbar-track": {
                background: "red",
                border: "1px solid",
              },
            }}
          >
            {locations?.length > 0 &&
              locations.map(({ location, address }: ILocationAddress, idx) => (
                <ListItem
                  key={idx}
                  onClick={() => navigate(`/locations/${location.id}`)}
                  address={address}
                  title={location.name}
                  id={location.id}
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

export default Locations;
