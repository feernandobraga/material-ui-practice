import { Button, Grid, InputAdornment, OutlinedInput, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add"
import { FilterList } from "@material-ui/icons";

import React from "react";

const ResponsiveHeader = () => {
  return (

    <Grid container style={{background: "blue"}} justify="space-between" alignItems="center">

      <Grid container item sm={6} style={{background: "purple"}} direction="column">

        <Grid item style={{background: "yellow"}}>
          <Typography>Management</Typography>
        </Grid>
        <Grid item style={{background: "yellow", marginBottom: 8}}>
          <Typography>Clients</Typography>
        </Grid>


        <Grid container item style={{background: "green", marginBottom: 8}} sm={12}>
          <Grid item md={6} sm={12} style={{background: "cyan", marginRight:16, marginBottom: 8}} >
            <OutlinedInput
              placeholder="Search"
              size="small"
              fullWidth
              style={{ maxHeight: 40 }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>

          <Grid item  style={{background: "grey", marginRight:16}} >
            <Button variant="outlined" size="large">
              SEARCH
            </Button>
          </Grid>

          <Grid item  style={{background: "gold"}}>
            <Button variant="outlined" size="large">
              CLEAR
            </Button>
          </Grid>
        </Grid>

      </Grid>


      <Grid item sm={2} style={{background: "red"}}  xs={12}>

        <Grid container item direction="column" alignItems="center" style={{background: "blue"}}  >

          <Grid item style={{background: "pink"}}>
            <Button variant="contained" color="primary" style={{marginBottom: 8}} >
              <AddIcon />
              New Client
            </Button>
          </Grid>

          <Grid item>
            <Button color="primary" variant="outlined" >
              <FilterList />
              Show Filter
            </Button>
          </Grid>

        </Grid>

      </Grid>

    </Grid>


  );
};

export default ResponsiveHeader;
