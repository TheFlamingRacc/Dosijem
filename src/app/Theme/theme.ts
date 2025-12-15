"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1100,
      xl: 1950,
    },
  },
  palette: {
    primary: {
      main: "#BB8EFF",
      dark: "#9863E7",
    },
    background: {
      main: "#09021C",
      default: "#1C152E",
      paper: "#2B243D",
    },
    text: {
      primary: "#A5A1AF",
      secondary: "#A4A1AF",
    },
  },
  typography: {
    fontFamily: "e-Ukraine",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiSlider-thumb": {
            borderRadius: "30%",
            transform: "rotate(45deg)",
            backgroundColor: "white",
            width: "min(0.8vw, 1.6vh)",
            height: "min(0.8vw, 1.6vh)",
            left: "auto",
            "&:hover": {
              boxShadow: "0 0 0 4px rgba(187, 142, 255, 0.2)",
            },
            "&.Mui-focusVisible, &.Mui-active": {
              boxShadow: "0 0 0 6px rgba(187, 142, 255, 0.3)",
            },
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#6F6F6F",
            opacity: "1",
          },
        },
      },
    },
  },
});
