import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Spinner from "../../components/Spinner.component";
import { RootState } from "../../store/Store";
import Toast from "../../components/Toast.component";

const SharedLayoutUnauthenticated = () => {
  const { showSpinner, showToast } = useSelector(
    (store: RootState) => store.layout
  );

  return (
    <Stack direction={"column"} alignItems={"center"} width={"100%"}>
      {showSpinner && <Spinner />}
      {showToast && <Toast />}
      <Outlet />
    </Stack>
  );
};

export default SharedLayoutUnauthenticated;
