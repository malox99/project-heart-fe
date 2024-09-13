import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setSelectedRoute } from "../../store/reducers/layout/layoutSlice";
import { colors } from "../../theme/palette";
import { setUserData } from "../../store/reducers/user/userSlice";

const sidebarStyle = {
  width: "calc(100% - 16px)",
  flexDirection: "row",
  height: "60px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px",
  boxShadow: `0px 0px 4px 0px ${colors.secondary}`,
  background: colors.secondary,
};

interface RouteProps {
  name: string;
  path: string;
}

const headerRoute: RouteProps[] = [{ name: "Contattaci", path: "/contact-us" }];

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Stack sx={sidebarStyle} gap={9}>
      <Box
        sx={{ width: 55, height: 55, borderRadius: 55, background: "white" }}
      />
      <Stack direction={"row"} gap={2} flex={1} justifyContent={"flex-end"}>
        {headerRoute.map((route, idx) => (
          <Typography key={idx} variant="headerLink" onClick={() => navigate(route.path)}>
            {route.name}
          </Typography>
        ))}
      </Stack>
      <Button variant="header" onClick={() => dispatch(setUserData(null))}>
        Login
      </Button>
    </Stack>
  );
};

export default Navbar;
