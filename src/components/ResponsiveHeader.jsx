import { Button, Grid, InputAdornment, makeStyles, OutlinedInput, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add"
import { FilterList } from "@material-ui/icons";

import React from "react";

const useStyles = makeStyles(() => ({
  management: {
    marginBottom: 4,
  },
  clients: {
    fontSize: 27,
    fontWeight: 500,
  },
  inputSearch: {
    maxHeight: 42,
    backgroundColor: "white",
  },

  btn: {
    maxHeight: 42,
    backgroundColor: "white",
  },
}));


const ResponsiveHeader = () => {
  const classes = useStyles();
  return (

    <Grid container justify="space-between" alignItems="center" style={{marginBottom: 24}}>

      <Grid container item sm={6}  direction="column">

        <Grid item >
          <Typography className={classes.management}>Management</Typography>
        </Grid>
        <Grid item >
          <Typography className={classes.clients}>Clients</Typography>
        </Grid>


        <Grid container item style={{marginBottom: 8}} sm={12} direction="row">
          <Grid item md={6} sm={12} style={{marginRight:16, marginBottom: 8}} >
            <OutlinedInput
            className={classes.inputSearch}
              placeholder="Search"
              size="small"
              fullWidth
              
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
          

          <Grid item style={{marginRight:16}} >
            <Button variant="outlined" size="large" className={classes.btn}>
              SEARCH
            </Button>
          </Grid>

          <Grid item >
            <Button variant="outlined" size="large" className={classes.btn}>
              CLEAR
            </Button>
          </Grid>
      
        </Grid>

      </Grid>


      <Grid item sm={2}  xs={12}>

        <Grid container item direction="column" alignItems="center" >

          <Grid item >
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
