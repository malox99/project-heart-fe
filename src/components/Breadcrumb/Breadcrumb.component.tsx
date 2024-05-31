import { Breadcrumbs, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { colors } from "../../theme/palette";
import { uppercaseFirstLetter } from "../../utils/utils";
import CustomIcon from "../CustomIcon.compent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locStore = useSelector((store: RootState) => store.locations);

  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const splittedLocations = location.pathname.split("/");
    const newLocations = splittedLocations.filter((el) => el.length > 0);
    setLocations(newLocations);
  }, [location]);

  const renderLabel = (path: string, idx: number) => {
    if (idx === 1 && location.pathname.indexOf("location") > -1) {
      const name = locStore.locations.find((el) => el.location.id === path)
        ?.location.name;
      return name;
    } else {
      return uppercaseFirstLetter(path);
    }
  };

  return (
    <Breadcrumbs
      separator={
        <CustomIcon
          name="chevron_right"
          size={15}
          color={colors.primary}
          margin={"0px"}
        />
      }
      sx={{ mb: 2 }}
    >
      {locations.length > 0 && (
        <Button variant="text" onClick={() => navigate("/")}>
          Home
        </Button>
      )}
      {locations.length > 0 &&
        locations?.map((loc, idx) =>
          loc === locations[locations.length - 1] ? (
            <Typography key={idx} variant="breadcrumb">
              {renderLabel(loc, idx)}
            </Typography>
          ) : (
            <Button key={idx} variant="text" onClick={() => navigate(loc)}>
              {uppercaseFirstLetter(loc)}
            </Button>
          )
        )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
