import {
  Stack,
  TextField,
  Typography,
  TextFieldProps,
  SxProps,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../../store/reducers/form/formSlice";
import { RootState } from "../../store/Store";

type IProps = {
  label: string;
  customWidth?: number;
  size?: 'small';
  name: string
} & TextFieldProps;

const InputLabel = (props: IProps) => {
  const dispatch = useDispatch();
  const form = useSelector((store: RootState) => store.form);
  const { label, customWidth, required, size } = props;
  let sx: SxProps = {};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(handleInput({ name, value }));
  };

  if (size === 'small') {
    sx = { height: "45px", "& .MuiInputBase-root": { height: "45px" } };
  }

  return (
    <Stack width={customWidth || "100%"}>
      <Typography variant="body2" ml={0.5} mb={0.7}>
        {label}
        {required ? " *" : ""}
      </Typography>
      <TextField
        {...props}
        value={form[props.name]}
        sx={sx}
        fullWidth
        onChange={(e) => handleChange(e)}
        label={null}
        placeholder={label}
      />
    </Stack>
  );
};

export default InputLabel;
