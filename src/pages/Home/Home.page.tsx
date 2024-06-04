import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card.component";
import FilterSlider from "../../components/FilterSlider.component";
import HomeTextField from "../../components/HomeTextField/HomeTextField.component";
import { RootState } from "../../store/Store";
import { setShowSpinner } from "../../store/reducers/layout/layoutSlice";
import { getFromSessionStorage, setToSessionStorage } from "../../utils/utils";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { showSpinner } = useSelector((store: RootState) => store.layout);
  const [startPosition, setStartPosition] = useState(
    getFromSessionStorage("startPosition")
  );

  useEffect(() => {
    if (!startPosition) {
      dispatch(setShowSpinner(true));
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setToSessionStorage("startPosition", [latitude, longitude]);
        dispatch(setShowSpinner(false));
      });
    }
  }, []);

  useEffect(() => {
    if (!startPosition)
      setStartPosition(getFromSessionStorage("startPosition"));
  }, [showSpinner]);

  return (
    <Stack p={2} gap={2} padding={"0 300px"}>
      <Typography variant="h4" textAlign={"center"}>
        Dove?
      </Typography>

      <Stack direction={"row"} gap={1} px={6}>
        <HomeTextField />
        <Button
          variant="primary"
          onClick={() => navigate("/locations")}
          disabled={!startPosition}
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
