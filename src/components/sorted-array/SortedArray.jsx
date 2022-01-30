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
      height: '310px',
    },
    imput :{
        margin: '25px',
    },
    note: {
        color: 'red',
    },
    success: {
        color: 'green',
    }
  }));

const SortedArray = () => {
    const classes = useStyles();
    const [arraySorted, setArraySorted] = useState();
    const [input, setInput] = useState(null);
    const [array, setArray] = useState([]);
    const [isNumberInsideSortedArray, setIsNumberInsideSortedArray] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const createArray = (input) => {
        var splitInput = input.split(' ');
        splitInput = splitInput.filter(x => x !== ''); 
        if(isArraySorted(splitInput, splitInput.length) != 0){
            setArraySorted(true);
        }else{
            setArraySorted(false);
        }
        setArray(splitInput);
    }

    const isArraySorted = (array, length) => {
        if (length == 1 || length == 0)
        return 1;
 
        if (array[length - 1] < array[length - 2])
        return 0;
 
        return isArraySorted(array, length - 1);
    }

    const isNumberWithinSortedArray = () => {
        for(var i=0; i < array.length; i++)
        {
            if(array[i]===input){
                if(arraySorted){
                    setIsNumberInsideSortedArray(true);
                    break;
                }else{
                    setIsNumberInsideSortedArray(false);
                }
            }else{
                setIsNumberInsideSortedArray(false);
            }
        }
        setIsDone(true);
    }

    return <div>
        <Card sx={{ maxWidth: 345}} className={classes.card}>
            <Typography gutterBottom variant="h5" component="div">
               2. Write a function to see if a number is contained within a sorted array.
            </Typography>
            <Typography gutterBottom variant="h6" className={classes.note} component="div">
               Note: While inputting array please seperate it with space 
            </Typography>
            <TextField className={classes.imput} label="Input Array Number" onKeyUp={(e) => createArray(e.target.value)}  variant="outlined" />
            <TextField className={classes.imput} label="Input Number" type="number" onKeyUp={(e) => setInput(e.target.value)} variant="outlined" /><br/><br/>
            <Button variant="outlined" onClick={() => {isNumberWithinSortedArray()}}>Submit</Button>
            {isDone ? (<>
                {isNumberInsideSortedArray ? (<>
                <Typography gutterBottom variant="h6" className={classes.success} component="div">
                    The Number {input} is inside the sorted Array.
                </Typography> 
            </>) : (<>
                <Typography gutterBottom variant="h6" className={classes.note} component="div">
                    The Number {input} is not inside the sorted Array. <br/>
                    Maybe the array is not sorted or the number is not inside the Array.
                </Typography> 
            </>)}
            </>) : (<></>)}
            
         </Card>
    </div>;
};

export default SortedArray;
