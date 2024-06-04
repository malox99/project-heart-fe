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
    <Stack direction={"column"} alignItems={"center"} width={"100%"}>
      <Navbar />
      <Stack
        width={"calc(100% - 40px)"}
        p={"20px"}
        overflow={"auto"}
        height={"calc(100vh - 140px)"}
      >
        <Breadcrumb />
        {showSpinner && <Spinner />}
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SharedLayout;
