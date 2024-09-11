import { Stack } from "@mui/material";

const NotFound = () => {
  return (
    <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <img src={require("../../assets/images/not-found.png")} width={600} />
    </Stack>
  );
};

export default NotFound;
