"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1100,
      xl: 1950
    }
  },
  palette: {
    primary: {
      main: '#BB8EFF',
      dark: '#9863E7'
    },
    background: {
      main: '#09021C',
      default: "#1C152E",
      paper: '#2B243D',

    },
    text: {
      primary: '#A5A1AF',
      secondary: '#A4A1AF'
    }
  },
  typography: {
    fontFamily: 'e-Ukraine',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        }
      }
    }
  }
});
