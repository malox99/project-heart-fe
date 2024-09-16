import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "../pages/ContactUs/ContactUs.page";
import Home from "../pages/Home/Home.page";
import LocationDetail from "../pages/LocationDetail/LocationDetail.page";
import Locations from "../pages/Locations/Locations.pages";
import Login from "../pages/Login/Login.page";
import NotFound from "../pages/NotFound/NotFound.page";
import SharedLayout from "../pages/SharedLayout/SharedLayout.page";
import SignUp from "../pages/SignUp/SignUp.pages";
import { RootState } from "../store/Store";
import SharedLayoutUnauthenticated from "../pages/SharedLayoutUnauthenticated/SharedLayoutUnauthenticated.page";
import { getFromSessionStorage } from "../utils/utils";
import { setUserData } from "../store/reducers/user/userSlice";

const Router = () => {
  const dispatch = useDispatch();
  const user = getFromSessionStorage("user")
  const { data } = useSelector((store: RootState) => store.user);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  useEffect(() => {
    const user = getFromSessionStorage("user");
    if (user && !data) {
      dispatch(setUserData(JSON.parse(user)));
    }
    setIsAuthenticated(!!user);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path={"/"} element={<SharedLayout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"locations"} element={<Locations />} />
            <Route path={"locations/:id"} element={<LocationDetail />} />
            <Route path={"contact-us"} element={<ContactUs />} />
          </Route>
        ) : (
          <Route path={"/"} element={<SharedLayoutUnauthenticated />}>
            <Route path={"/"} element={<Login />} />
            <Route path={"sign-up"} element={<SignUp />} />
            <Route path={"not-found"} element={<NotFound />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
