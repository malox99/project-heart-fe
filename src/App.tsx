import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import LocationDetail from "./pages/LocationDetail/LocationDetail.page";
import { default as Locations } from "./pages/Locations/Locations.pages";
import Login from "./pages/Login/Login.page";
import SharedLayout from "./pages/SharedLayout/SharedLayout.page";
import { store } from "./store/Store";
import { setShowSpinner } from "./store/reducers/layout/layoutSlice";
import { customTheme } from "./theme/theme";
import authFetch from "./utils/axios";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.page";
import ContactUs from "./pages/ContactUs/ContactUs.page";
import SignUp from "./pages/SignUp/SignUp.pages";
import NotFound from "./pages/NotFound/NotFound.page";

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
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path={"locations"} element={<Locations />} />
            <Route path={"locations/:id"} element={<LocationDetail />} />
            <Route path={"contact-us"} element={<ContactUs />} />
          </Route>

          {["/", "/login"].map((path) => (
            <Route key={path} path={path} element={<Login />} />
          ))}
          <Route path={"sign-up"} element={<SignUp />} />
          <Route path={"not-found"} element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
