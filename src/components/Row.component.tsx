import { Stack, StackProps } from "@mui/material";
import { PropsWithChildren } from "react";

type IProps = StackProps & PropsWithChildren;

const Row = ({ children, ...props }: IProps) => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={2}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Row;
