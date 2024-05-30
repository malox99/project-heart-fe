import { Breadcrumbs, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const splittedLocations = location.pathname.split("/");
    const newLocations = splittedLocations.filter((el) => el.length > 0);
    setLocations(newLocations);
  }, [location]);

  return (
    <Breadcrumbs separator={">"} sx={{mb: 2, width: '100%'}}>
      {locations.length > 1 &&
        locations?.map((loc, idx) => (
          <Button
            key={idx}
            sx={{
              padding: 0,
              textTransform: "lowercase",
            }}
            variant="text"
          >
            {loc}
          </Button>
        ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
