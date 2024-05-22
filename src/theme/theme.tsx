import { createTheme } from "@mui/material";
import { colors } from "./palette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

declare module "@mui/material/TextField" {
  interface BaseTextFieldProps {
    variant: "home";
  }
}

export const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          borderRadius: 20,
          paddingRight: 25,
          paddingLeft: 25,
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: colors.primary,
            color: "white",
            border: `1px solid ${colors.primary}`,
            "&:hover": {
              background: "white",
              color: colors.primary,
              border: `1px solid ${colors.primary}`,
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: colors.secondary,
            color: "white",
            border: `1px solid ${colors.secondary}`,
            "&:hover": {
              background: "white",
              color: colors.secondary,
              border: `1px solid ${colors.secondary}`,
            },
          },
        },
      ],
    }
  },
});
