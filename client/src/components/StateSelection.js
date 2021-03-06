/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, withTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import stateInfo from "./StateInfo.json";
import StateInformation from "./StateInformation";
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "1.5rem",
  },
  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderWidth: 2,
      borderLeft: 0,
      borderRight: 0,
      borderTop: 0,
      borderRadius: 0,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#385EB5"
    }
  },
  clearIndicator: {
    color: "white",
  },
  popupIndicator: {
    color: "white",
  }
}));

const StateTextField = withStyles({
  root: {
    "& input + fieldset": {
      borderWidth: 2,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
    },
    "& input": {
      fontFamily: 'Libre Franklin !important',
      color: "white",
    },
    "& label": {
      fontFamily: 'Libre Franklin !important',
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#385EB5 !important",
    }
  },
})(TextField);

export default function StateSelection(props) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <Grid item xs={12} md={12} lg={6} xl={6}>
        <Autocomplete
          id="state-select"
          classes={classes}
          options={stateInfo}
          getOptionLabel={(option) => option.state}
          value={props.selectedState}
          onChange={(event, newInputValue) => {
            props.changeState(newInputValue);
            if (newInputValue) {
              let stateName = newInputValue.state.replace(/\s+/g, '_');
              ReactGA.event({
                category: 'Dropdown',
                action: stateName
              });
            }
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <StateTextField
              {...params}
              label="Select a State"
              variant="outlined"
            />
          )}
        />
        {props.selectedState ? <StateInformation selectedState={props.selectedState} /> : null}
      </Grid>
    </React.Fragment>
  );
}
