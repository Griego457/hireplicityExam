import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '310px',
    },
  }));

const Factorial = () => {
    const classes = useStyles();
    const [answer, setAnswer] = useState(0);
    const ComputeFactorial = (givenNumber) =>{
        let answer = 1;
        for(var i = givenNumber; i >= 1; i--){
            answer = answer * i;
        }
        setAnswer(answer);
    }

    return <div>
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <Typography gutterBottom variant="h5" component="div">
                1. Write a function to compute the factorial of a given number.
            </Typography>
            <TextField onKeyUp={(e) => {ComputeFactorial(e.target.value);}} label="Input Number" type="number" variant="outlined" />
            <Typography gutterBottom variant="h5" component="div">
                =
            </Typography>
            <TextField value={answer} variant="outlined" disabled /><br/><br/>
         </Card>
    </div>;
};

export default Factorial;
