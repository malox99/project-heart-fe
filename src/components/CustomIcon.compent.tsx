import { Icon } from "@mui/material";

interface IProps {
  name: string;
  size?: number;
  color?: string;
  margin?: string;
  onClickIcon?: () => void;
}

const CustomIcon = ({ name, size, color, margin, onClickIcon }: IProps) => {
  return (
    <Icon
      onClick={onClickIcon}
      sx={{
        fontSize: size || 35,
        color: color || "gray",
        cursor: "pointer",
        margin: margin || "16px 0",
      }}
    >
      {name}
    </Icon>
  );
};

export default CustomIcon;
