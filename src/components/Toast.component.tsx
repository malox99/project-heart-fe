import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { colors } from "../theme/palette";

const Toast = () => {
  const { toast: {message, status} } = useSelector((store: RootState) => store.layout);
  
  return (
    <Stack sx={{
      padding: '15px',
      width: 300,
      borderRadius: '4px',
      position: 'absolute',
      right: '10px',
      top: '10px',
      background: status === 'error' ? colors.red : colors.green
    }}>
      <Typography variant="toast">{message}</Typography>
    </Stack>
  );
};

export default Toast;
