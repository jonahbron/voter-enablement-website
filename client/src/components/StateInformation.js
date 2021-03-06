/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles, withTheme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
      fontFamily: 'Libre Franklin !important',
      fontWeight: '100 !important',
      marginLeft: '0.5rem',
    },
  });

export default function StateInformation(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item style={{marginBottom: '1em', marginTop: '1.5em'}}>
            <Typography variant="h4" className={classes.root}><strong>Dates and deadlines for {props.selectedState.state}:</strong></Typography>
        </Grid>
        <Grid item style={{marginBottom: '1em', marginTop: '1em'}}>
            <Typography variant="body1" className={classes.root}>Voter Registration Deadline</Typography>
            <Typography variant="body1" className={classes.root}><strong>{props.selectedState.vrd_inperson}</strong></Typography>
        </Grid>
        <Grid item style={{marginBottom: '1em'}}>
            <Typography variant="body1" className={classes.root}>Absentee Application Deadline</Typography>
            <Typography variant="body1" className={classes.root}><strong>{props.selectedState.abs_app}</strong></Typography>
        </Grid>
        <Grid item style={{marginBottom: '1em'}}>
            <Typography variant="body1" className={classes.root}>Early Voting</Typography>
            <Typography variant="body1" className={classes.root}><strong>{props.selectedState.abs_early}</strong></Typography>
        </Grid>
  </React.Fragment>
  );
}
