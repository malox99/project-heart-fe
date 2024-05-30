import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Login from "./pages/Login/Login.page";
import MainZoneView from "./pages/MainZoneView/MainZoneView.pages";
import SharedLayout from "./pages/SharedLayout/SharedLayout.page";
import TestToDelete from "./pages/TestToDelete.page";
import { customTheme } from "./theme/theme";

function App() {
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
