import { createTheme } from "@mui/material";
import { colors } from "./palette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    breadcrumb: true;
  }
}

export const customTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '40px',
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${colors.gray.light} !important`,
          }
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          "&::-webkit-scrollbar": {
            width: 9,
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
            boxShadow: `inset 0 0 5px #dddddd`,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.gray.light,
            borderRadius: "5px",
            height: "60px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          borderRadius: 20,
          paddingRight: 25,
          paddingLeft: 25,
          '&:disabled': {
            background: colors.gray.light,
            color: 'white',
            opacity: .7,
            border: `1px solid ${colors.gray.light}`
          }
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
        {
          props: { variant: "text" },
          style: {
            color: colors.gray.medium,
            fontWeight: 300,
            fontSize: 13,
            padding: 0,
            minWidth: 0,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: colors.primary,
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "breadcrumb" },
          style: {
            color: colors.secondary,
            fontWeight: 500,
            fontSize: 14,
          },
        },
      ],
    },
  },
});
