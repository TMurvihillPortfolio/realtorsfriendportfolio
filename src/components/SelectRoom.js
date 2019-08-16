import React from 'react';
import { withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from '../styles/SelectRoomStyles';

function SelectRoom(props) {
    const { classes } = props;
    const [values, setValues] = React.useState({
        room: 'default',
        name: 'hai',
    });
    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <form className={classes.root} autoComplete="off">
        {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple" style={{color:'whitesmoke'}}>Select Room</InputLabel> */}
          <Select
            value={values.room}
            onChange={handleChange}
            inputProps={{
              room: 'default',
              id: 'age-simple',
            }}
            className={classes.root}
            autoWidth
          >
            <MenuItem value={'default'} selected>Select Room</MenuItem>
            <MenuItem value={'kitchen'}>Kitchen</MenuItem>
            <MenuItem value={'living'}>Living Room</MenuItem>
            <MenuItem value={'master'}>Master Bedroom</MenuItem>
          </Select>
        {/* </FormControl> */}
        </form>
    )
}

export default withStyles(styles)(SelectRoom);