import React from 'react';
import uuid from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'whitesmoke',
    backgroundColor: 'wheat',
    marginBottom: '30px',
    paddingBottom: '30px'
  },
  formControl: {
    margin: theme.spacing(1),
    color: 'whitesmoke',
    '& input': {
        color: 'whitesmoke'
    },
    '& *': {
        color: 'whitesmoke'
    }
  },
  buttonControl: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      '& > :first-child': {
          marginRight: '20px'
      }
  }
}));

export default function ComposedTextField(props) {
  const [labelWidth, setLabelWidth] = React.useState(0);
  //const [completed, setCompleted] = React.useState(false);
  const [improvement, setImprovement] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [estPriceAdj, setEstPriceAdj] = React.useState('');
  const [estTimeToSell, setEstTimeToSell] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  function handleChange(e) {
    if (e.target.id !== undefined) {
        switch(e.target.id) {
            case 'completed':
                //setCompleted(e.target.checked);
                break;
            case 'improvement':
                setImprovement(e.target.value);
                break;
            case 'cost':
                setCost(e.target.value);
              break;
            case 'estPriceAdj':
                setEstPriceAdj(e.target.value);
              break;
            case 'estTimeToSell':
                setEstTimeToSell(e.target.value);
              break;
            case 'notes':
                setNotes(e.target.notes);
              break;
            default:
              // code block
          }
    }       
  }
  function resetForm() {
   document.querySelector("#completed").checked = false;
   setImprovement('');
   setCost('');
   setEstPriceAdj('');
   setEstTimeToSell('');
   setNotes('');
  }
  function submitImprovement(e) {
    console.log('imin submit');
    console.log(e);
    const completedCheckBox = document.querySelector("#completed");
    e.preventDefault();
    const newImprovementObj = {
        completed: completedCheckBox.checked,
        improvement: improvement,
        cost: cost,
        estPriceAdj: estPriceAdj,
        estTimeToSell: estTimeToSell,
        notes: notes,
        id: uuid() 
    };
    props.addimprovement(props.room, newImprovementObj);
    resetForm();
}
  return (
    <div className={classes.container}>
        <form onSubmit={submitImprovement} className={classes.root}>
            <h3>Add Improvement</h3>
            
            <FormControl className={classes.formControl}>
                <label htmlFor="completed">
                    Completed
                </label>
                <Checkbox
                //checked={completed}
                id="completed"
                onChange={handleChange}
                color="primary"
                inputProps={{
                  'aria-label': 'secondary checkbox',
                }}
            />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="improvement">
                    Improvement
                </InputLabel>
                <OutlinedInput
                    id="improvement"
                    value={improvement}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
            
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="cost">
                    Cost
                </InputLabel>
                <OutlinedInput
                    id="cost"
                    value={cost}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="estPriceAdj">
                    estPriceAdj
                </InputLabel>
                <OutlinedInput
                    id="estPriceAdj"
                    value={estPriceAdj}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="estTimeToSell">
                    estTimeToSell
                </InputLabel>
                <OutlinedInput
                    id="estTimeToSell"
                    value={estTimeToSell}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="notes">
                    notes
                </InputLabel>
                <OutlinedInput
                    id="notes"
                    value={notes}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                />
            </FormControl>
            <div className={classes.buttonControl}>
                <Button type="submit" variant='contained' color='primary'>Submit</Button>
                <Button onClick={resetForm} variant='contained' color='secondary'>Reset</Button>
            </div>
            
        </form>
      
    </div>
  );
}


// import { withStyles } from '@material-ui/core';
// import {styles} from '../styles/AddImprovementsStyles';

// function AddImprovement(props) {
//     const { classes } = props;
//     console.log('porps', props);

    // function submitImprovement(e) {
    //     console.log('imin submit');
    //     e.preventDefault();
    //     const newImprovementObj = {
    //         completed: true,
    //         improvement: 'addimprovemtn',
    //         cost: 2400,
    //         estPriceAdj: 1500,
    //         estTimeToSell: '1 month',
    //         notes: 'carpet in bad shape',
    //         id: uuid() 
    //     };
    //     props.addimprovement(props.room, newImprovementObj);
    // }
//     return (
        // <form onSubmit={submitImprovement} className={classes.root}>
        //     <h1>Add Improvement</h1>
//             <label htmlFor='improvement'>Improvement</label>
//             <input name='improvement'
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default withStyles(styles)(AddImprovement);