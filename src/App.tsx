import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Router from "./router/Router";
import { store } from "./store/Store";
import {
  setShowSpinner,
  setShowToast,
} from "./store/reducers/layout/layoutSlice";
import { customTheme } from "./theme/theme";
import authFetch from "./utils/axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    authFetch.interceptors.request.use((req) => {
      store.dispatch(setShowSpinner(true));
      return req;
    });

    authFetch.interceptors.response.use(
      (res) => {
        store.dispatch(setShowSpinner(false));
        if (res?.config.url === "/auth/signUp") {
          dispatch(
            setShowToast({
              text: res?.data.message,
              isOpen: true,
              status: "success",
            })
          );
          setTimeout(() => {
            dispatch(
              setShowToast({ text: "", isOpen: false, status: "success" })
            );
          }, 3000);
        }
        return res;
      },
      (err) => {
        store.dispatch(setShowSpinner(false));
        dispatch(
          setShowToast({
            text: err?.response?.data?.message,
            isOpen: true,
            status: "error",
          })
        );
        setTimeout(() => {
          dispatch(setShowToast({ text: "", isOpen: false, status: "error" }));
        }, 3000);

        return err;
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
