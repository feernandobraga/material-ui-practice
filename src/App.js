import { Button } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Header />
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={2} />
        <Grid item xs={8}>
          <Content />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
