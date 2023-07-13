import React, { useState } from "react";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TextInput from "React-Automation-Studio/components/BaseComponents/TextInput";
import TextOutput from "React-Automation-Studio/components/BaseComponents/TextOutput";
import Slider from "React-Automation-Studio/components/BaseComponents/Slider";
import GraphY from "React-Automation-Studio/components/BaseComponents/GraphY";
import SelectionList from "React-Automation-Studio/components/BaseComponents/SelectionList";
import ThumbWheel from "React-Automation-Studio/components/BaseComponents/ThumbWheel";
import ToggleButton from "React-Automation-Studio/components/BaseComponents/ToggleButton";
import Gauge from "React-Automation-Studio/components/BaseComponents/Gauge";
import AppBar from "@mui/material/AppBar";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import Divider from "@mui/material/Divider";
import StyledIconIndicator from "React-Automation-Studio/components/BaseComponents/StyledIconIndicator";
import TraditionalLayout from "React-Automation-Studio/components/UI/Layout/ComposedLayouts/TraditionalLayout.js";
import { useLocalPV } from "React-Automation-Studio/components/SystemComponents/LocalPV";

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => (WrappedComponent) => (props) =>
  <WrappedComponent {...props} width="xs" />;

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0, flexGrow: 1 }}>
      {props.children}
    </Typography>
  );
}

const styles = (theme) => ({
  body1: theme.typography.body1,
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    overflowX: "hidden",
    overflowY: "hidden",
  },
  paper: {
    padding: theme.spacing(1) * 0,
    margin: theme.spacing(1) * 0,
    height: "100%",
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(1) * 2,
  },
});

const MobileDemo1 = (props) => {
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(0);
  const editorType = useLocalPV({ pv: "loc://editorType" });

  const handleChange = (event, value) => {
    setShowAdvancedSettings(value);
  };

  const { width } = props;

  const { classes } = props;

  let graphVH;

  if (width === "xs") {
    graphVH = "25vh";
  } else if (width === "sm") {
    graphVH = "30vh";
  } else {
    graphVH = "30vh";
  }

  return (
    <TraditionalLayout
      title="EPICS Beckhoff OPCUA Example"
      denseAppBar
      alignTitle="center"
    >
      <div style={{ paddingBottom: 48 }}>
        {showAdvancedSettings === 0 && (
          <TabContainer key={"tabContainer0"}>
            <Grid container className={classes.root}
            justifyContent={"center"}
            >
              <Grid item xs={12} md={8}  xl={6}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"stretch"}
                  direction={"row"}
                  justifyContent={"flex-start"}
                >
              
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      item
                      justifyContent="center"
                      spacing={2}
                      alignItems="stretch"
                    >
                      <Grid item xs={3}>

                        <TextOutput
                          pv="$(device):tick"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={3} >
                        <StyledIconIndicator
                              pv="$(device):Bo"
                              macros={{ "$(device)": "Beckhoff" }}
                              // onColor={props.theme.palette.ok.main}
                              // offColor="default"
                              usePvLabel
                              labelPlacement={"end"}
                         />
                      </Grid>
                      <Grid item xs={3} >
                  
                        <ToggleButton
                          pv="$(device):Bo"
                          macros={{ "$(device)": "Beckhoff" }}
                          custom_selection_strings={["OFF", "ON"]}
                        />
                      </Grid>
                      <Grid item xs={3} >
                  
                        <StyledIconIndicator
                          pv="$(device):Bi"
                          macros={{ "$(device)": "Beckhoff" }}
                          // onColor={props.theme.palette.ok.main}
                          // offColor="default"
                          usePvLabel
                          labelPlacement={"end"}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                     
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoUInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoUInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiUInt64"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                    
                     
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                   
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoUInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoUInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiUInt32"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoUInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoUInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiUInt16"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoFloat"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoFloat"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiFloat"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoDouble"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoDouble"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiDouble"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          // usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):AoSByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          pv="$(device):AoSByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvMinMax={true}
                          usePvPrecision
                          // usePvLabel
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):AiSByte"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // usePvUnits
                          alarmSensitive
                          usePvMinMax
                          usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):test_date"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // // usePvUnits
                          // alarmSensitive
                          // usePvMinMax
                          // usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextOutput
                          pv="$(device):StringIn"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // // usePvUnits
                          // alarmSensitive
                          // usePvMinMax
                          // usePvPrecision
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextInput
                          pv="$(device):StringOut"
                          macros={{ "$(device)": "Beckhoff" }}
                          usePvLabel
                          // // usePvUnits
                          // alarmSensitive
                          // usePvMinMax
                          // usePvPrecision
                        />
                      </Grid>
   
                    </Grid>
                      </Grid>
                     
                    </Grid>
                    </Grid>
                 

                 </Grid>
                
          </TabContainer>
        )}
        {showAdvancedSettings === 1 && (
          <TabContainer key={"tabContainer1"}>
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  alignItems={"stretch"}
                  direction={"column"}
                  justifyContent={"flex-start"}
                >
                  <Grid item>
                    <div style={{ marginBottom: 8 }}>Settings</div>
                    <Grid
                      container
                      spacing={2}
                      alignItems={"stretch"}
                      direction={"row"}
                      justifyContent={"flex-start"}
                    >
                      <Grid item xs={12} lg={4}>
                        <TextInput
                          pv="$(device):frequency"
                          macros={{ "$(device)": "testIOC" }}
                          usePvUnits={true}
                          prec={1}
                          usePvLabel={true}
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextInput
                          pv="$(device):amplitude"
                          macros={{ "$(device)": "testIOC" }}
                          usePvUnits={true}
                          usePvLabel={true}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
        )}
      </div>

     
    </TraditionalLayout>
  );
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(MobileDemo1)
);
