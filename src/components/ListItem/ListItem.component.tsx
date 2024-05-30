import { Stack, Typography } from "@mui/material";
import { colors } from "../../theme/palette";
import CustomIcon from "../CustomIcon.compent";
import { TCategory } from "../../types/locationSlice.type";

interface IProps {
  title: string;
  category?: TCategory;
}

const ListItem = ({ title, category }: IProps) => {
  const getIcon = () => {
    switch (category) {
      case "RISTORANTE":
        return "restaurant";
      case "BAR":
        return "local_bar";
      default:
        return "";
    }
  };

  return (
    <Stack
      width={"100%"}
      height={90}
      sx={{
        outline: "5px",
        borderRadius: "7px",
        cursor: "pointer",
        background: colors.secondary,
        boxShadow: "0px 0px 4px 0px #000000",
        "&:hover": {
          opacity: 0.5,
          boxShadow: "none",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        height={"100%"}
        p={"10px"}
        spacing={2}
      >
        <CustomIcon name={getIcon()} color={colors.primary} />
        <Stack>
          <Typography variant="body1" sx={{color: 'white'}}>{title}</Typography>
          <Typography variant="caption" sx={{color: 'white'}}>Petrella Tifernina (CB)</Typography>
          <Typography variant="caption" sx={{color: 'white'}}>Via di prova, 1</Typography>
        </Stack>
        <Stack alignItems={"flex-end"} flex={1}>
          <CustomIcon name="chevron_right" color={colors.primary} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ListItem;
