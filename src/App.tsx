import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Login from "./pages/Login/Login.page";
import MainZoneView from "./pages/MainZoneView/MainZoneView.pages";
import SharedLayout from "./pages/SharedLayout/SharedLayout.page";
import TestToDelete from "./pages/TestToDelete.page";
import { store } from "./store/Store";
import { setShowSpinner } from "./store/reducers/layout/layoutSlice";
import { customTheme } from "./theme/theme";
import authFetch from "./utils/axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  authFetch.interceptors.request.use((req) => {
    store.dispatch(setShowSpinner(true));
    return req;
  });

  authFetch.interceptors.response.use((res) => {
    store.dispatch(setShowSpinner(false));
    return res;
  }, (err) => {
    store.dispatch(setShowSpinner(false));
    return err;
  });
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home">
              <Route path="/home" element={<Home />} />
              <Route path={"main-zone-view"} element={<MainZoneView />} />
              <Route path={"main-zone-view/:id"} element={<MainZoneView />} />
            </Route>
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
