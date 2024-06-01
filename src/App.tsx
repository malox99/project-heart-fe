import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import LocationDetail from "./pages/LocationDetail/LocationDetail.page";
import { default as Locations } from "./pages/Locations/Locations.pages";
import Login from "./pages/Login/Login.page";
import SharedLayout from "./pages/SharedLayout/SharedLayout.page";
import TestToDelete from "./pages/TestToDelete.page";
import { store } from "./store/Store";
import { setShowSpinner } from "./store/reducers/layout/layoutSlice";
import { customTheme } from "./theme/theme";
import authFetch from "./utils/axios";

function App() {
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
        return err;
      }
    );
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path={"locations"} element={<Locations />} />
            <Route path={"locations/:id"} element={<LocationDetail />} />
            <Route path={"test"} element={<TestToDelete />} />
            <Route path={"login"} element={<Login />} />
          </Route>

          {/* <Route path='*' element={<SharedLayout/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
