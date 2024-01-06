"use client";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5361fc",
    },
    secondary: {
      main: "#32c13b",
    },
    info: {
      main: "#fcb42f",
    },
  },
});

export function MUIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
