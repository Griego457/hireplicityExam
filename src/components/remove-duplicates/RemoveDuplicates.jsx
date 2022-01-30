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

const RemoveDuplicates = () => {
    const classes = useStyles();

    const [array, setArray] = useState([]);
    const [noDuplicateArray, setNoduplicateArray] = useState([])

    const createArray = (input) => {
        var splitInput = input.split(' ');
        splitInput = splitInput.filter(x => x !== ''); 
        setArray(splitInput);
    }

    const removeDuplicate = () => {
        let mp = new Map();
        var secondArray = [];
        for (let i = 0; i < array.length; ++i)
        {
            if (mp.get(array[i]) == null)
                secondArray.push(array[i] + " ");
   
            mp.set(array[i], true);
        }
        setNoduplicateArray(secondArray);
    }

    return <div>
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <Typography gutterBottom variant="h5" component="div">
                4. Remove Duplicate using a Hash (associate array).
            </Typography>
            <Typography gutterBottom variant="h6" className={classes.note} component="div">
               Note: While inputting array please seperate it with space 
            </Typography>
            <TextField label="Input Array Number" onKeyUp={(e) => {createArray(e.target.value)}} variant="outlined" />
            <Typography gutterBottom variant="h5" component="div">
                =
            </Typography>
            <TextField variant="outlined" value={noDuplicateArray} disabled /><br/><br/>
            <Button variant="outlined" onClick={() => removeDuplicate()} >Remove Duplicate</Button>
         </Card>
    </div>;
};

export default RemoveDuplicates;
