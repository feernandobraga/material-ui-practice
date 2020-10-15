import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#583299",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
