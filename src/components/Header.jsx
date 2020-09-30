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
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} sm container style={{ border: "1px solid purple" }}>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="caption">MANAGEMENT</Typography>
            <Typography>Clients</Typography>
          </Grid>

          <Grid item container spacing={3} alignItems="center">
            <Grid item md={4} sm={12} style={{ border: "1px solid pink" }}>
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

            <Grid
              container
              item
              md={4}
              sm={12}
              style={{ border: "1px solid cyan" }}
              alignItems="center"
            >
              <Grid item>
                <Button variant="outlined" size="large">
                  SEARCH
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" style={{ marginLeft: 12 }}>
                  CLEAR
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ border: "1px solid orange" }}>
          <Button variant="contained" color="primary">
            <AddIcon />
            New Client
          </Button>
        </Grid>
        <Button variant="outlined" color="primary">
          <FilterList />
          Show Filter
        </Button>
      </Grid>
    </Grid>

    // <Grid container spacing={2} justify="space-between" alignItems="center">

    //   <Grid item md={8} xs={12} style={{ border: "1px solid red" }}>
    // <Typography variant="caption">MANAGEMENT</Typography>
    // <Typography>Clients</Typography>
    //   </Grid>

    //   <Grid item md={2} xs={12} style={{ border: "1px solid purple" }}>
    // <Button variant="contained" color="primary">
    //   <AddIcon />
    //   New Client
    // </Button>
    //   </Grid>

    //   <Grid item md={12} style={{ border: "1px solid red" }}>
    // <OutlinedInput
    //   placeholder="Search"
    //   startAdornment={
    //     <InputAdornment position="start">
    //       <SearchIcon />
    //     </InputAdornment>
    //   }
    // />

    // <Button variant="outlined">SEARCH</Button>

    // <Button variant="outlined">CLEAR</Button>
    //   </Grid>
    // </Grid>
  );

  // const classes = useStyles();
  // return (
  //   <Grid container className={classes.header}>
  //     <Grid container item direction="column" xs={8}>
  //       <Grid container item direction="column">
  //         <Typography className={classes.management} variant="caption">
  //           MANAGEMENT
  //         </Typography>
  //         <Typography className={classes.clients}>Clients</Typography>
  //       </Grid>

  //       <Grid container item className={classes.actionGrid}>
  //         <OutlinedInput
  //           placeholder="Search"
  //           className={classes.inputSearch}
  //           startAdornment={
  //             <InputAdornment position="start">
  //               <SearchIcon />
  //             </InputAdornment>
  //           }
  //         />

  //         <Button variant="outlined" className={classes.btn}>
  //           SEARCH
  //         </Button>

  //         <Button variant="outlined" className={classes.btn}>
  //           CLEAR
  //         </Button>
  //       </Grid>
  //     </Grid>

  //     <Grid container item direction="column" xs={4} className={classes.rightBtnGroup}>
  // <Button variant="contained" color="primary">
  //   <AddIcon />
  //   New Client
  // </Button>

  // <Button variant="outlined" color="primary">
  //   <FilterList />
  //   Show Filter
  // </Button>
  //     </Grid>
  //   </Grid>
  // );
};

export default Header;
