import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { colors } from "../../theme/palette";
import { useNavigate } from "react-router";
import InputLabel from "../../components/form/InputLabel.component";

const Login = () => {
  const navigate = useNavigate()

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      sx={{ background: `linear-gradient(${colors.gray.light}99, white)` }}
    >
      <Stack width={400} gap={3} alignItems={"center"}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 50,
            background: 'white'
          }}
        />
        <InputLabel label={'Email'} required/>
        <InputLabel label={'Password'} required type="password"/>
        <Stack flexDirection={"row"} width={"100%"} gap={"20px"}>
          <Button variant="secondary" sx={{ flex: 1 }} onClick={() => navigate('/sign-up')}>
            Registrati
          </Button>
          <Button variant="primary" sx={{ flex: 1 }} onClick={() => navigate('/')}>
            Accedi
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
