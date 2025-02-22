import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TraditionalLayout from "React-Automation-Studio/components/UI/Layout/ComposedLayouts/TraditionalLayout.js";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";
// Styles

const useStyles = makeStyles((theme) => ({
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
}));

let enableDemos =
  typeof process.env.REACT_APP_DISABLE_DEMOS !== "undefined"
    ? !(process.env.REACT_APP_DISABLE_DEMOS.toUpperCase() === "TRUE")
    : true;

const Main = (props) => {
  const classes = useStyles();

  const styleguideURL =
    window.location.protocol + "//" + window.location.hostname + ":6060/";
  const buttonVariant = "contained";
  return (
    <TraditionalLayout
      title="React Automation Studio V4.0.2"
      denseAppBar
      alignTitle="center"
    >
      <Grid
        container
        direction="row"
        item
        justifyContent="center"
        spacing={1}
        alignItems="center"
        style={{ paddingTop: 64 }}
      >
        <Grid item lg={2} sm={4} xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={3}
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Button
                className={classes.button}
                component={Link}
                to="/Example"
                color="primary"
                variant="contained"
              >
                {" "}
                OPCUA Examples{" "}
              </Button>
            </Grid>
            {enableDemos && (
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  component={Link}
                  to="/DemosDashboard"
                  color="primary"
                  variant="contained"
                >
                  {" "}
                  Other Demos Dashboard{" "}
                </Button>
              </Grid>
            )}

            
            <Grid item xs={12}>
              <Button
                fullWidth
                className={classes.button}
                target="_blank"
                href={styleguideURL}
                variant={buttonVariant}
              >
                {" "}
                Help and Style Guide{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TraditionalLayout>
  );
};

export default Main;
