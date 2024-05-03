import { Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router";
import CustomIcon from "../CustomIcon.compent";
import { routes } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpenSidebar,
  setSelectedRoute,
} from "../../store/reducers/layout/layoutSlice";
import { RootState } from "../../store/Store";
import { useEffect } from "react";

const sidebarStyle = {
  width: 70,
  height: "100vh",
  borderRight: "1px solid lightgray",
  alignItems: "center",
  padding: "6px",
  justifyContent: "space-between",
  boxShadow: "1px 0px 8px 0px #000000",
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isOpen, selectedRoute } = useSelector((store: RootState) => store.layout);

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [location.pathname]);

  const Divider = () => {
    return (
      <Stack
        sx={{
          height: "1px",
          width: "100%",
          background: "lightgray",
        }}
      />
    );
  };

  return (
    <Stack sx={sidebarStyle}>
      <Stack width={"100%"} alignItems={"center"}>
        <CustomIcon
          name="menu"
          onClickIcon={() => dispatch(setIsOpenSidebar(!isOpen))}
        />
        <Divider />
        {routes.map((route, idx) => (
          <CustomIcon
            key={idx}
            color={route.url === selectedRoute ? 'red' : ''}
            name={route.icon}
            onClickIcon={() => navigate(route.url)}
          />
        ))}
      </Stack>

      <Stack width={"100%"} alignItems={"center"}>
        <Divider />
        <CustomIcon name="logout" onClickIcon={() => navigate("/")} />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
