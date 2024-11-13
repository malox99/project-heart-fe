import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card.component";
import FilterSlider from "../../components/FilterSlider.component";
import HomeTextField from "../../components/HomeTextField/HomeTextField.component";
// import { RootState } from "../../store/Store";
// import { setShowSpinner } from "../../store/reducers/layout/layoutSlice";
import { setToSessionStorage } from "../../utils/utils";

const Home = () => {
  const navigate = useNavigate();
  const [lat, setLat] = useState<string>('');
  const [lon, setLon] = useState<string>('');
  // const dispatch = useDispatch<any>();
  // const { showSpinner } = useSelector((store: RootState) => store.layout);
  // const [startPosition, setStartPosition] = useState(
  //   getFromSessionStorage("startPosition")
  // );

  // useEffect(() => {
  //   if (!startPosition) {
  //     dispatch(setShowSpinner(true));
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setToSessionStorage("startPosition", [latitude, longitude]);
  //       dispatch(setShowSpinner(false));
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!startPosition)
  //     setStartPosition(getFromSessionStorage("startPosition"));
  // }, [showSpinner]);

  return (
    <Stack p={2} gap={2} padding={"0 300px"}>
      <Typography variant="h4" textAlign={"center"}>
        Dove?
      </Typography>
      <Stack direction={"row"} width={"50%"} gap={2}>
        <TextField
          label="lat"
          value={lat}
          onChange={(e) => {
            setLat(e.target.value)
            setToSessionStorage("startPosition", [parseFloat(e.target.value), parseFloat(lon)]);
          }}
          variant="filled"
        />
        <TextField
          label="lon"
          value={lon}
          onChange={(e) => {
            setLon(e.target.value)
            setToSessionStorage("startPosition", [parseFloat(lat), parseFloat(e.target.value)]);
          }}
          variant="filled"
        />
      </Stack>

      <Stack direction={"row"} gap={1} px={6}>
        <HomeTextField />
        <Button
          variant="primary"
          onClick={() => navigate("/locations")}
          // disabled={!startPosition}
        >
          Cerca
        </Button>
      </Stack>

      <FilterSlider />

      <Stack mt={4} gap={2}>
        <Typography variant="h6">Potrebbero interessarti</Typography>
        <Grid container spacing={2}>
          {new Array(4).fill("").map((el, idx) => (
            <Card key={idx} />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
