import { Stack } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/baseLayout/Navbar.component";

const SharedLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
      sx={{ overflowY: "hidden" }}
    >
      <Navbar />
      <Stack width={"calc(100% - 40px)"} p={"20px"} sx={{ overflowY: "auto" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SharedLayout;
