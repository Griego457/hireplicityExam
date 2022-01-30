import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import Factorial from './components/factorial/Factorial'
import SortedArray from './components/sorted-array/SortedArray'
import RandomizeArray from './components/randomize-array/RandomizeArray'
import RemoveDuplicates from './components/remove-duplicates/RemoveDuplicates'
import MatchAllDates from './components/match-all-dates-format/MatchAllDates'

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} md={6}>
        <Factorial/>
      </Grid>
      <Grid item xs={12} md={6}>
        <SortedArray/>
      </Grid>
      <Grid item xs={12} md={6}>
        <RandomizeArray/>
      </Grid>
      <Grid item xs={12} md={6}>
        <RemoveDuplicates/>
      </Grid>
      <Grid item xs={12} md={12}>
        <MatchAllDates/>
      </Grid>
    </Grid>
  );
}

export default App;
