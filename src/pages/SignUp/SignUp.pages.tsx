import { Button, Stack, Typography } from "@mui/material";
import Row from "../../components/Row.component";
import InputLabel from "../../components/form/InputLabel.component";
import { useNavigate } from "react-router";
import { colors } from "../../theme/palette";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Stack height={"100vh"} alignItems={"center"} sx={{ background: `linear-gradient(${colors.gray.light}99, white)` }}>
      <Stack width={600} margin={"auto"}>
        <Typography variant="h4" mb={4}>
          Registrati
        </Typography>
        <Stack gap={4}>
          <Row>
            <InputLabel label={"Nome"} required isSmall />
            <InputLabel label={"Cognome"} required isSmall />
          </Row>
          <Row>
            <InputLabel label={"Email"} required isSmall />
            <InputLabel label={"Numero di telefono"} required isSmall />
          </Row>
          <Row>
            <InputLabel label={"Username"} required isSmall />
            <InputLabel label={"Password"} required type="password" isSmall />
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
