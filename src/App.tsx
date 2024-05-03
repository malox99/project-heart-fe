import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout/SharedLayout.page";
import Home from "./pages/Home/Home.page";
import MainZoneView from "./pages/MainZoneView/MainZoneView.pages";
import Login from "./pages/Login/Login.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/login"].map((path) => (
          <Route key={path} path={path} element={<Login />} />
        ))}
        <Route path="/" element={<SharedLayout />}>
          <Route path={"home"} element={<Home />} />
          <Route path={"main-zone-view"} element={<MainZoneView />} />
        </Route>

        {/* <Route path='*' element={<SharedLayout/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
