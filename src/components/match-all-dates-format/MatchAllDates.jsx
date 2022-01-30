import React, {Fragment, useState} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import Moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
      },
    card: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    note: {
        color: 'red',
    },
    success: {
        color: 'green',
    }
}));

const MatchAllDates = () => {
    const classes = useStyles();

    const [dateFormat1, setDateFormat1] = useState(Moment(new Date).format('MM/DD/YYYY'));
    const [dateFormat2, setDateFormat2] = useState(Moment(new Date).format('M/D/YYYY'));
    const [dateFormat3, setDateFormat3] = useState(Moment(new Date).format('MM/D/YYYY'));
    const [dateFormat4, setDateFormat4] = useState(Moment(new Date).format('M/DD/YYYY'));
    const [isDateMatch, setIsDateMatch] = useState();
    const [isDone, setIsDone] = useState();
    

    const compareDates = () => {
        var datesArray = [new Date(dateFormat1).getTime(), new Date(dateFormat2).getTime(), new Date(dateFormat3).getTime(), new Date(dateFormat4).getTime()]
        let mp = new Map();
        var secondArray = [];
        for (let i = 0; i < datesArray.length; ++i)
        {
            if (mp.get(datesArray[i]) == null)
                secondArray.push(datesArray[i] + " ");
   
            mp.set(datesArray[i], true);
        }
        if(secondArray.length > 1){
            setIsDateMatch(false);
        }
        else{
            setIsDateMatch(true);
        }
        setIsDone(true);
    }

    return <div>
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <Typography gutterBottom variant="h5" component="div">
                5. Write a single regular expression that can be used to match date formats.
            </Typography><br/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={6} md={3}>
                    <DesktopDatePicker
                    label="mm/dd/yyyy format"
                    inputFormat="MM/dd/yyyy"
                    value={dateFormat1}
                    onChange={(date) => setDateFormat1(date)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <DesktopDatePicker
                    label="m/d/yyyy format"
                    inputFormat="M/d/yyyy"
                    value={dateFormat2}
                    onChange={(date) => setDateFormat2(date)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <DesktopDatePicker
                    label="mm/d/yyyy format"
                    inputFormat="MM/d/yyyy"
                    value={dateFormat3}
                    onChange={(date) => setDateFormat3(date)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <DesktopDatePicker
                    label="m/dd/yyyy format"
                    inputFormat="M/dd/yyyy"
                    value={dateFormat4}
                    onChange={(date) => setDateFormat4(date)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
            </Grid>
            </LocalizationProvider><br/>
            <Button variant="outlined" onClick={() => compareDates()}>Match</Button>
            {isDone ? (<>
                {isDateMatch ? (<>
                    <Typography gutterBottom className={classes.success} variant="h6" component="div">
                        This 4 dates are match.
                    </Typography><br/>
                </>) : (<>
                    <Typography gutterBottom variant="h6" className={classes.note} component="div">
                        This 4 dates are NOT match.
                    </Typography><br/>
                </>)}
            </>) : (<></>)}
         </Card>
         
    </div>;
};

export default MatchAllDates;
