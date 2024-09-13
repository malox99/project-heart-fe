import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

const Toast = () => {
  const { errorMessage } = useSelector((store: RootState) => store.layout);
  
  return (
    <Stack>
      <Typography>{errorMessage}</Typography>
    </Stack>
  );
};

export default Toast;
