import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setShowSpinner } from "../../store/reducers/layout/layoutSlice";
import { colors } from "../../theme/palette";
import { setToSessionStorage } from "../../utils/utils";
import CustomIcon from "../CustomIcon.compent";

const HomeTextField = () => {
  const dispatch = useDispatch<any>();

  const getLocation = () => {
      dispatch(setShowSpinner(true));
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setToSessionStorage("startPosition", [latitude, longitude]);
        dispatch(setShowSpinner(false));
      });
  };

  return (
    <TextField
      fullWidth
      placeholder="Città, luoghi, attività"
      InputProps={{
        endAdornment: (
          <CustomIcon name="my_location" color={colors.gray.medium} onClickIcon={getLocation} size={25}/>
        ),
      }}
    />
  );
};

export default HomeTextField;
