import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card.component";
import HomeTextField from "../../components/HomeTextField/HomeTextField.component";
import { setShowSpinner } from "../../store/reducers/layout/layoutSlice";
import { getFromSessionStorage, setToSessionStorage } from "../../utils/utils";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const startPosition = getFromSessionStorage("startPosition");

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

  return (
    <Stack p={2} gap={2} padding={"100px 300px"}>
      <Typography variant="h4" textAlign={"center"}>
        Dove?
      </Typography>

      <Stack direction={"row"} gap={1} px={6}>
        <HomeTextField />
        <Button variant="primary" onClick={() => navigate("/locations")}>
          Cerca
        </Button>
      </Stack>

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
