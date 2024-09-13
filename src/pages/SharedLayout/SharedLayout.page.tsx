import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import Spinner from "../../components/Spinner.component";
import Navbar from "../../components/baseLayout/Navbar.component";
import { RootState } from "../../store/Store";
import Toast from "../../components/Toast.component";

const SharedLayout = () => {
  const { showSpinner, showToast } = useSelector(
    (store: RootState) => store.layout
  );

  return (
    <Stack direction={"column"} alignItems={"center"} width={"100%"}>
      <Navbar />
      <Stack
        width={"calc(100% - 40px)"}
        overflow={"auto"}
        p={"20px"}
        height={"calc(100vh - 117px)"}
      >
        <Breadcrumb />
        {showSpinner && <Spinner />}
        {showToast && <Toast />}
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SharedLayout;
