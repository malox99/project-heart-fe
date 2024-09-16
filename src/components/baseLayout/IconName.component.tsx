import { Stack, Typography } from "@mui/material";
import { colors } from "../../theme/palette";
import { getFromSessionStorage } from "../../utils/utils";

const IconName = () => {
  const { name, surname } = JSON.parse(getFromSessionStorage("user"));
  return (
    <Stack
      width={50}
      height={50}
      borderRadius={50}
      alignItems={"center"}
      border={"1px solid white"}
      justifyContent={"center"}
      sx={{
        background: colors.primary,
      }}
    >
      <Typography color={"white"} fontSize={21}>
        {name.substring(0, 1).toUpperCase()}
        {surname.substring(0, 1).toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default IconName;
