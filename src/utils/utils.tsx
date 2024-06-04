import { Stack } from "@mui/material";
import { colors } from "../theme/palette";

export const uppercaseFirstLetter = (text: string) => {
  const textParsed = text.toLowerCase();
  return textParsed.charAt(0).toUpperCase() + textParsed.slice(1);
};

export const setToSessionStorage = (name: string, value: any) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

export const getFromSessionStorage = (name: string) => {
  return JSON.parse(sessionStorage.getItem(name) as string);
};

export const getIconCustom = (name: string) => {
  const parsedName = name.split(" ");
  const label =
    parsedName[0].slice(0, 1).toUpperCase() +
    parsedName[1].slice(0, 1).toUpperCase();
  return (
    <Stack
      width={"35px"}
      height={"35px"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        borderRadius: "50%",
        background: colors.gray.light,
        color: "white",
        fontSize: "14px",
      }}
    >
      {label}
    </Stack>
  );
};
