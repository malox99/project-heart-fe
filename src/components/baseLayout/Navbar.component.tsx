import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate} from "react-router";
import { setSelectedRoute } from "../../store/reducers/layout/layoutSlice";

const sidebarStyle = {
  width: "calc(100% - 16px)",
  flexDirection: "row",
  height: "88px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px",
  boxShadow: "0px 0px 4px 0px #000000",
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [location.pathname]);

  return (
    <Stack height={80} sx={sidebarStyle}>
      <Typography variant="h4">Project Heart</Typography>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
      </Stack>
      <Typography variant="h6" sx={{cursor: 'pointer'}} onClick={() => navigate('/test')}>Test</Typography>
      <Button variant="secondary">Login</Button>
    </Stack>
  );
};

export default Navbar;
