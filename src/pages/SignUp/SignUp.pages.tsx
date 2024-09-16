import { Button, Stack, Typography } from "@mui/material";
import Row from "../../components/Row.component";
import InputLabel from "../../components/form/InputLabel.component";
import { useNavigate } from "react-router";
import { colors } from "../../theme/palette";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { useEffect } from "react";
import { handleResetInput } from "../../store/reducers/form/formSlice";
import {
  setIsCompletedSignUp,
  signUp,
} from "../../store/reducers/user/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { isCompletedSignUp } = useSelector((store: RootState) => store.user);
  const { name, surname, email, phoneNumber, username, password } = useSelector(
    (store: RootState) => store.form
  );

  useEffect(() => {
    return () => {
      dispatch(handleResetInput());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isCompletedSignUp) {
      navigate(-1);
      dispatch(setIsCompletedSignUp(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompletedSignUp]);

  return (
    <Stack
      height={"100vh"}
      alignItems={"center"}
      width={"100%"}
      sx={{ background: `linear-gradient(${colors.gray.light}99, white)` }}
    >
      <Stack width={600} margin={"auto"}>
        <Typography variant="h4" mb={4}>
          Registrati
        </Typography>
        <Stack gap={4}>
          <Row>
            <InputLabel label={"Nome"} required size="small" name="name" />
            <InputLabel
              label={"Cognome"}
              required
              size="small"
              name="surname"
            />
          </Row>
          <Row>
            <InputLabel label={"Email"} required size="small" name="email" />
            <InputLabel
              label={"Numero di telefono"}
              required
              size="small"
              name="phoneNumber"
            />
          </Row>
          <Row>
            <InputLabel
              label={"Username"}
              required
              size="small"
              name="username"
            />
            <InputLabel
              label={"Password"}
              required
              type="password"
              size="small"
              name="password"
            />
          </Row>
        </Stack>
        <Row sx={{ mt: 4 }}>
          <Button
            variant="secondary"
            sx={{ flex: 1 }}
            onClick={() => navigate(-1)}
          >
            Indietro
          </Button>
          <Button
            variant="primary"
            sx={{ flex: 1 }}
            onClick={() => dispatch(signUp(""))}
            disabled={
              !name ||
              !surname ||
              !email ||
              !phoneNumber ||
              !username ||
              !password
            }
          >
            Avanti
          </Button>
        </Row>
      </Stack>
    </Stack>
  );
};

export default SignUp;
