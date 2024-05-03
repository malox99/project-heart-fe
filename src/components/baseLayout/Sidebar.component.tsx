import { Stack } from "@mui/material";
import { useNavigate } from "react-router";
import CustomIcon from "../CustomIcon.compent";
import { routes } from "../../routes/routes";

const sidebarStyle = {
  width: "70px",
  height: "100vh",
  borderRight: "1px solid lightgray",
  alignItems: "center",
  padding: "6px",
  justifyContent: "space-between",
  boxShadow: "1px 0px 8px 0px #000000",
};

const Sidebar = () => {
  const navigate = useNavigate();

  const Divider = () => {
    return (
      <Stack
        sx={{
          height: "1px",
          width: "100%",
          background: "lightgray",
        }}
      />
    );
  };

  return (
    <Stack sx={sidebarStyle}>
      <Stack width={"100%"} alignItems={"center"}>
        <CustomIcon name="menu" />
        <Divider />
        {routes.map((route, idx) => (
          <CustomIcon
            key={idx}
            name={route.icon}
            onClickIcon={() => navigate(route.url)}
          />
        ))}
      </Stack>

      <Stack width={"100%"} alignItems={"center"}>
        <Divider />
        <CustomIcon name="logout" onClickIcon={() => navigate('/')}/>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
