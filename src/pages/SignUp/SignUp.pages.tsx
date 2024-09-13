import { Button, Stack, Typography } from "@mui/material";
import Row from "../../components/Row.component";
import InputLabel from "../../components/form/InputLabel.component";
import { useNavigate } from "react-router";
import { colors } from "../../theme/palette";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Stack
      height={"100vh"}
      alignItems={"center"}
      width={'100%'}
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
          <Button variant="primary" sx={{ flex: 1 }}>
            Avanti
          </Button>
        </Row>
      </Stack>
    </Stack>
  );
};

export default SignUp;
