import { Stack, SxProps, Typography } from "@mui/material";
import { colors } from "../../theme/palette";
import CustomIcon from "../CustomIcon.compent";
import { IAddress, TCategory } from "../../types/locationSlice.type";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

interface IProps {
  title: string;
  category?: TCategory;
  address: IAddress;
  id: string;
  onClick: () => void;
}

const listStyleContainer: SxProps = {
  outline: "5px",
  borderRadius: "7px",
  cursor: "pointer",
  background: colors.secondary,
  boxShadow: "0px 0px 4px 0px #000000",
};

const ListItem = ({ title, category, address, id, onClick }: IProps) => {
  const { selectedLocation } = useSelector(
    (store: RootState) => store.locations
  );

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
        ...listStyleContainer,
        opacity: selectedLocation ? (selectedLocation?.id !== id ? 0.2 : 1) : 1,
      }}
      onClick={onClick}
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
          <Typography variant="body1" sx={{ color: "white" }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ color: "white" }}>
            {address.city}
          </Typography>
          <Typography variant="caption" sx={{ color: "white" }}>
            {address.addressLine1} {address.streetNumber}
          </Typography>
        </Stack>
        <Stack alignItems={"flex-end"} flex={1}>
          <CustomIcon name="chevron_right" color={colors.primary} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ListItem;
