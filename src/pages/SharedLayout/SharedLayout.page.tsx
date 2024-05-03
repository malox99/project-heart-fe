import { Stack } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/baseLayout/Sidebar.component";

const SharedLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
      sx={{ overflowY: "hidden" }}
    >
      <Sidebar />
      <Stack
        height={"100vh"}
        width={"calc(100% - 70px)"}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SharedLayout;
