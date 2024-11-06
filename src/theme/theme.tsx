import { createTheme } from "@mui/material";
import { colors } from "./palette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    header: true;
    tab: true;
    'tab-selected': true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    breadcrumb: true;
    headerLink: true;
    caption: true;
    toast: true;
  }
}

export const customTheme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "none!important",
          border: `1px solid ${colors.gray.light} !important`,
        },
        root: {
          "& .MuiList-root": {
            borderRadius: 0,
            padding: "0px!important",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "40px",
          // '& [aria-expanded=true] ~ .MuiOutlinedInput-notchedOutline': {
          //   borderRadius: '5px 5px 0 0',
          // },
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${colors.gray.light} !important`,
          },
        },
      },
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
          "&:disabled": {
            background: colors.gray.light,
            color: "white",
            opacity: 0.7,
            border: `1px solid ${colors.gray.light}`,
          },
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
        {
          props: { variant: "header" },
          style: {
            background: colors.secondary,
            color: "white",
            border: `1px solid white`,
            "&:hover": {
              background: "white",
              color: colors.secondary,
            },
          },
        },
        {
          props: { variant: "tab" },
          style: {
            background: "white",
            color: colors.secondary,
            border: `1px solid ${colors.secondary}`,
            fontWeight: 600,
            borderRadius: '8px',
            "&:hover": {
              background: "white",
            },
          },
        },
        {
          props: { variant: "tab-selected" },
          style: {
            background: colors.secondary,
            color: "white",
            border: `1px solid ${colors.secondary}`,
            fontWeight: 600,
            borderRadius: '8px',
            "&:hover": {
              background: colors.secondary,
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
        {
          props: { variant: "headerLink" },
          style: {
            width: "fit-content",
            fontWeight: 500,
            fontSize: 14,
            color: "white",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
        {
          props: { variant: "caption" },
          style: {
            fontWeight: 300,
            fontSize: 14,
            color: colors.secondary,
          },
        },
        {
          props: { variant: "toast" },
          style: {
            fontWeight: 500,
            fontSize: 14,
            color: "white",
            lineHeight: "22px",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "white",
          borderRadius: "4px",
          border: `1px solid ${colors.gray.light}`,
          "& fieldset": { border: "none" },
        },
      },
    },
  },
});
