import React from "react";

import withStyles from "@mui/styles/withStyles";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import RedirectToLogIn from "React-Automation-Studio/components/SystemComponents/RedirectToLogin.js";

import TraditionalLayout from "React-Automation-Studio/components/UI/Layout/ComposedLayouts/TraditionalLayout.js";
import Grid from "@mui/material/Grid";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  center: {
    margin: "auto",

    width: "15%",
    height: "50%",
  },
  button: {
    width: "100%",
    height: "100%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Example = (props) => {
  const { classes } = props;

  return (
    <TraditionalLayout
      title="React Automation Studio OPCUA Examples"
      denseAppBar
      alignTitle="center"
    >
      <RedirectToLogIn />
      <Grid
        container
        direction="row"
        item
        justifyContent="center"
        spacing={1}
        alignItems="center"
        style={{ paddingTop: 64 }}
      >
        <Grid item lg={4} sm={4} xs={2}></Grid>
        <Grid item lg={2} sm={4} xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={3}
            alignItems="stretch"
          >
            {/* <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                component={Link}
                to="/Example1"
                color="primary"
                variant="contained"
              >
                {" "}
                Example1{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                component={Link}
                to="/Example2"
                color="primary"
                variant="contained"
              >
                {" "}
                Example2{" "}
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                component={Link}
                to="/Example3"
                color="primary"
                variant="contained"
              >
                {" "}
                Example3{" "}
              </Button>
            </Grid> */}
            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                component={Link}
                to="/ExampleOPCUA"
                color="primary"
                variant="contained"
              >
                {" "}
                Example Python Server OPCUA{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                component={Link}
                to="/ExampleBeckhoffOPCUA"
                color="primary"
                variant="contained"
              >
                {" "}
                Example Beckhoff PLC OPCUA{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={4} sm={4} xs={2}></Grid>
      </Grid>
    </TraditionalLayout>
  );
};

export default withRouter(withStyles(styles)(Example));
