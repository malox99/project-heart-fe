import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Rating } from "react-simple-star-rating";
import { RootState } from "../../store/Store";
import { getLocationDetail } from "../../store/reducers/locations/locationsSlice";
import { colors } from "../../theme/palette";
import Comments from "./components/Comments.component";

const LocationDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const { locationDetail } = useSelector((store: RootState) => store.locations);

  const splittedLocation = location.pathname.split("/");

  useEffect(() => {
    dispatch(getLocationDetail(splittedLocation[splittedLocation.length - 1]));
  }, []);

  return (
    <Stack>
      {locationDetail && (
        <>
          <Stack direction={"row"} alignItems={"center"} gap={1} mb={3}>
            <Typography variant="h5">{locationDetail.name}</Typography>
            <Rating
              initialValue={4.7}
              disableFillHover
              allowFraction
              size={20}
            />
            <Typography variant="caption">4.7</Typography>
          </Stack>

          <Carousel sx={{ height: 300, borderRadius: "10px" }}>
            {locationDetail.photos?.length > 0
              ? locationDetail.photos.map((photo, i) => (
                  <img
                    key={i}
                    width={"100%"}
                    height={"300px"}
                    style={{ objectFit: "cover" }}
                    src={photo}
                  />
                ))
              : null}
          </Carousel>

          <Stack
            height={"1px"}
            width={"100%"}
            my={3}
            sx={{ background: colors.gray.light }}
          />

          <Comments />
        </>
      )}
    </Stack>
  );
};

export default LocationDetail;
