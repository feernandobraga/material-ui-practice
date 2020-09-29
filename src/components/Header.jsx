import {
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { FilterList } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  management: {
    marginBottom: 4,
  },
  clients: {
    fontSize: 27,
    fontWeight: 500,
  },
  header: {
    height: 100,
    marginBottom: 40,
  },

  guideBorder: {
    border: "1px solid red",
  },

  rightBtnGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 6,
    maxWidth: 240,
  },

  actionGrid: {
    marginTop: 8,
  },

  inputSearch: {
    width: 300,
    height: 48,
    backgroundColor: "white",
  },

  btn: {
    paddingRight: 26,
    paddingLeft: 26,
    marginLeft: 24,
    height: 48,
    backgroundColor: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid container item direction="column" xs={8}>
        <Grid container item direction="column">
          <Typography className={classes.management} variant="caption">
            MANAGEMENT
          </Typography>
          <Typography className={classes.clients}>Clients</Typography>
        </Grid>

        <Grid container item className={classes.actionGrid}>
          <OutlinedInput
            placeholder="Search"
            className={classes.inputSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />

          <Button variant="outlined" className={classes.btn}>
            SEARCH
          </Button>

          <Button variant="outlined" className={classes.btn}>
            CLEAR
          </Button>
        </Grid>
      </Grid>

      <Grid container item direction="column" xs={4} className={classes.rightBtnGroup}>
        <Button variant="contained" color="primary">
          <AddIcon />
          New Client
        </Button>

        <Button variant="outlined" color="primary">
          <FilterList />
          Show Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
