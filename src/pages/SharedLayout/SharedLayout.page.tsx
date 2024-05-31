import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import Spinner from "../../components/Spinner.component";
import Navbar from "../../components/baseLayout/Navbar.component";
import { RootState } from "../../store/Store";

const SharedLayout = () => {
  const { showSpinner } = useSelector((store: RootState) => store.layout);

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
      sx={{ overflowY: "hidden" }}
    >
      <Navbar />
      <Stack
        width={"calc(100% - 40px)"}
        p={"20px"}
        sx={{ overflowY: "auto" }}
        height={"100%"}
      >
        <Breadcrumb />
        {showSpinner && <Spinner />}
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SharedLayout;
