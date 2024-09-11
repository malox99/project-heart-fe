import {
  Stack,
  TextField,
  Typography,
  TextFieldProps,
  SxProps,
} from "@mui/material";

type IProps = {
  label: string;
  customWidth?: number;
  isSmall?: boolean;
} & TextFieldProps;

const InputLabel = (props: IProps) => {
  const { label, customWidth, required, isSmall } = props;
  let sx: SxProps = {};

  if (isSmall) {
    sx = { height: "45px", "& .MuiInputBase-root": { height: "45px" } };
  }

  return (
    <Stack width={customWidth || "100%"}>
      <Typography variant="body2" ml={0.5} mb={0.7}>
        {label}
        {required ? " *" : ""}
      </Typography>
      <TextField {...props} sx={sx} fullWidth label={null} placeholder={label} />
    </Stack>
  );
};

export default InputLabel;
