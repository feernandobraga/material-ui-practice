import {
  Button,
  createMuiTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { teal } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const ClientForm = () => {
  const history = useHistory();

  const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
  });

  const handleOnCancelClick = () => {
    history.push("/");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={30} justify="center">
          <Grid item>
            <Typography variant="h3" color="primary">
              New Client
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignContent="center"
          style={{ marginTop: "2em" }}
        >
          {/* Client name */}
          <Grid item container spacing={3} justify="center">
            <Grid item sm={10} xs={12} md={8}>
              <TextField
                id="outlined-basic"
                label="Client Name *"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          {/* END Client name */}

          {/* Email/workphone row */}
          <Grid item container spacing={3} justify="center">
            <Grid item sm={6} xs={12} md={5}>
              <TextField
                id="outlined-basic"
                label="Email Address *"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item sm={4} xs={12} md={3}>
              <TextField
                id="outlined-basic"
                label="Work Phone Number *"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          {/* END Email/workphone row */}

          {/* Address/Personal Phone row */}
          <Grid item container spacing={3} justify="center">
            <Grid item sm={6} xs={12} md={5}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item sm={4} xs={12} md={3}>
              <TextField
                id="outlined-basic"
                label="Personal Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          {/* END Address/Personal Phone row */}

          {/* PoC/Fax row */}
          <Grid item container spacing={3} justify="center">
            <Grid item sm={6} xs={12} md={5}>
              <TextField
                id="outlined-basic"
                label="Point of Contact"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item sm={4} xs={12} md={3}>
              <TextField id="outlined-basic" label="Fax" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          {/* END PoC/Fax row */}

          {/* Industry/Contract row */}
          <Grid item container spacing={3} justify="center">
            <Grid item sm={6} xs={12} md={5}>
              <TextField
                id="outlined-basic"
                label="Industry"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item sm={4} xs={12} md={3}>
              <TextField
                id="outlined-basic"
                label="Contract"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          {/* END Industry/Contract row */}

          {/* Website/Facebook row*/}
          <Grid item container spacing={5} justify="center">
            {/* Website */}
            <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
              <Grid item sm={1}>
                <LanguageIcon />
              </Grid>

              <Grid item sm={11} xs={11}>
                <TextField id="outlined-basic" label="Website" fullWidth />
              </Grid>
            </Grid>
            {/* END Website */}

            {/* Facebook */}
            <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
              <Grid item sm={1}>
                <FacebookIcon />
              </Grid>

              <Grid item sm={11} xs={11}>
                <TextField id="outlined-basic" label="Facebook" fullWidth />
              </Grid>
            </Grid>
            {/* END Facebook */}
          </Grid>
          {/* END Website/Facebook row*/}

          {/* Instagram/Twitter row*/}
          <Grid item container spacing={5} justify="center">
            {/* Instagram */}
            <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
              <Grid item sm={1}>
                <InstagramIcon />
              </Grid>

              <Grid item sm={11} xs={11}>
                <TextField id="outlined-basic" label="Instagram" fullWidth />
              </Grid>
            </Grid>
            {/* END Instagram */}

            {/* Twitter */}
            <Grid container item sm={5} xs={12} md={4} alignItems="flex-end">
              <Grid item sm={1}>
                <TwitterIcon />
              </Grid>

              <Grid item sm={11} xs={11}>
                <TextField id="outlined-basic" label="Twitter" fullWidth />
              </Grid>
            </Grid>
            {/* END Twitter */}
          </Grid>
          {/* END Instagram/Twitter row*/}

          {/* Submit/cancel row */}
          <Grid item container spacing={2} justify="center" style={{ marginTop: "1em" }}>
            {/* <Grid item sm={1} xs={0}/> */}

            <Grid item xs={6} sm={5} md={4}>
              <Button variant="outlined" color="primary" fullWidth size="medium">
                Submit
              </Button>
            </Grid>

            <Grid item xs={6} sm={5} md={4}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                size="medium"
                onClick={handleOnCancelClick}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
          {/* END Submit/cancel row */}
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ClientForm;
