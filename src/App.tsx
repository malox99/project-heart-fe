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
        return res;
      },
      (err) => {
        store.dispatch(setShowSpinner(false));
          dispatch(
            setShowToast({ text: err?.response?.data?.message, isOpen: true })
          );
          setTimeout(() => {
            dispatch(setShowToast({ text: "", isOpen: false }));
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
