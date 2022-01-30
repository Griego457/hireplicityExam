import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    note: {
        color: 'red',
    },
}));

const RandomizeArray = () => {
    const classes = useStyles();

    const [array, setArray] = useState([]);
    const [randomizedArray, setRandomizedArray] = useState([]);

    const createArray = (input) => {
        var splitInput = input.split(' ');
        splitInput = splitInput.filter(x => x !== ''); 
        setArray(splitInput);
    }

    const randomize = () => {
        var ranNums = [];
        var i = array.length;
        var j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(array[j]);
            array.splice(j,1);
        }
        setRandomizedArray(ranNums);
        setArray(ranNums);
    }

    return <div>
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <Typography gutterBottom variant="h5" component="div">
                3. Randomize an Array.
            </Typography>
            <Typography gutterBottom variant="h6" className={classes.note} component="div">
               Note: While inputting array please seperate it with space 
            </Typography>
            <TextField label="Input Array Number" onKeyUp={(e) => {createArray(e.target.value)}} variant="outlined" />
            <Typography gutterBottom variant="h5" component="div">
                =
            </Typography>
            <TextField  variant="outlined" value={randomizedArray} disabled /><br/><br/>
            <Button variant="outlined" onClick={() => randomize()} >Randomize</Button>
         </Card>
    </div>;
};

export default RandomizeArray;
