import React from "react";
import { Grid } from "@material-ui/core";

import Content from "./components/Content";
import ResponsiveHeader from "./components/ResponsiveHeader";

function App() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid container item md={12} lg={8} justify="center">
        <ResponsiveHeader />
      </Grid>

      <Grid container item md={12} lg={8} justify="center">
        <Content />
      </Grid>
    </Grid>
  );
}

export default App;
