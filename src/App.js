import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";
import ResponsiveHeader from "./components/ResponsiveHeader";

function App() {
  return (
    // <Grid container direction="column">
    //   <Grid item container>
    //     <Grid item xs={2} />
    //     <Grid item xs={8}>
    //       <Header />
    //     </Grid>
    //     <Grid item xs={2} />

    //     <Grid item xs={2} />
    //     <Grid item xs={8}>
    //       <Content />
    //     </Grid>
    //     <Grid item xs={2} />
    //   </Grid>
    // </Grid>
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid
        container
        direction="row"
        item
        // spacing={2}
        // xs={12}
        // sm={12}
        md={12}
        lg={8}
        justify="center"
        // alignItems="center"
        // style={{ background: "red" }}
      >
        <ResponsiveHeader />
      </Grid>

      <Content />
    </Grid>
  );
}

export default App;
