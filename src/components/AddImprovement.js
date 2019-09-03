import React from 'react';
import uuid from 'uuid';


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from '../styles/AddImprovementsStyles';

export default function ComposedTextField(props) {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [completed, setCompleted] = React.useState('');
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
      console.log('handle', e.target.checked);
    if (e.target.id !== undefined) {
        switch(e.target.id) {
            case 'completed':
                setCompleted(e.target.checked);
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
                setNotes(e.target.value);
              break;
            default:
              // code block
          }
    }       
  }
  function resetForm() {
   setCompleted(false);
   setImprovement('');
   setCost('');
   setEstPriceAdj('');
   setEstTimeToSell('');
   setNotes('');
  }
  function submitImprovement(e) {
    //prevent default submit
    e.preventDefault();
    //initialize variables
    const completedCheckBox = document.querySelector("#completed");
    console.log('checked', completedCheckBox.checked);
    //prepare new Improvement Obj
    const newImprovementObj = {
        completed: completed,
        improvement: improvement,
        cost: cost,
        estPriceAdj: estPriceAdj,
        estTimeToSell: estTimeToSell,
        notes: notes,
        id: uuid() 
    };
    //add new improvement object to state
    props.addimprovement(props.room, newImprovementObj);
    //reset form
    resetForm();
}
  return (
    <div className={classes.container}>
        <form onSubmit={submitImprovement} className={classes.root}>
            <h2>Add Improvement</h2>           
            <FormControl className={classes.formControl}>
                <label htmlFor="completed">
                    Completed
                </label>
                <Checkbox
                    //checked={completed}
                    id="completed"
                    onChange={handleChange}
                    color="primary"
                    checked={completed}
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
                    labelWidth={labelWidth+70}
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
                    labelWidth={labelWidth+60}
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="estTimeToSell">
                    estTimeAdj
                </InputLabel>
                <OutlinedInput
                    id="estTimeToSell"
                    value={estTimeToSell}
                    onChange={handleChange}
                    labelWidth={labelWidth+60}
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
                <Button style={{backgroundColor: 'rgb(65, 57, 129)'}} type="submit" variant='contained' color='primary'>Submit</Button>
                <Button style={{backgroundColor: '#237CB1'}} onClick={resetForm} variant='contained' color='secondary'>Reset</Button>
            </div>          
        </form>     
    </div>
  );
}