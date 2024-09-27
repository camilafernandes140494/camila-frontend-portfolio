import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9C89B8", // Cor principal
    },
    secondary: {
      main: "#F0A6CA", // Cor secundária
    },
    background: {
      default: "#F0E6EF", // Cor de fundo
    },
    info: {
      main: "#B8BEDD",
    },
    warning: {
      main: "#EFC3E6",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#B97375", // Cor principal
    },
    secondary: {
      main: "#CEB1BE", // Cor secundária
    },
    background: {
      default: "#2D2D34", // Cor de fundo
    },
    info: {
      main: "#9c9c9c",
    },
    warning: {
      main: "#F1E4E8",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});
