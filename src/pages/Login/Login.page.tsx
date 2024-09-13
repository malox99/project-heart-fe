import { Box, Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import InputLabel from "../../components/form/InputLabel.component";
import { RootState } from "../../store/Store";
import { handleResetInput } from "../../store/reducers/form/formSlice";
import { login } from "../../store/reducers/user/userSlice";
import { colors } from "../../theme/palette";

const Login = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { username, password } = useSelector((store: RootState) => store.form);
  const { data } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    return () => {
      dispatch(handleResetInput());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={'100%'}
      sx={{ background: `linear-gradient(${colors.gray.light}99, white)` }}
    >
      <Stack width={400} gap={3} alignItems={"center"}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 50,
            background: "white",
          }}
        />
        <InputLabel name="username" label={"Username"} required />
        <InputLabel
          name="password"
          label={"Password"}
          required
          type="password"
        />
        <Stack flexDirection={"row"} width={"100%"} gap={"20px"}>
          <Button
            variant="secondary"
            sx={{ flex: 1 }}
            onClick={() => navigate("/sign-up")}
          >
            Registrati
          </Button>
          <Button
            variant="primary"
            disabled={!username || !password}
            sx={{ flex: 1 }}
            onClick={() => dispatch(login(""))}
          >
            Accedi
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
