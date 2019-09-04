import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/SelectRoomStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { RoomContext } from '../contexts/RoomContext';

function SelectRoom({ classes }) {
    const { room, changeRoom } = useContext(RoomContext);
    return (
      <Select
        value={room}
        onChange={changeRoom}
        className={classes.root}
        autoWidth
        disableUnderline
      >
        <MenuItem value={'kitchen'}>Kitchen</MenuItem>
        <MenuItem value={'living'}>Living Room</MenuItem>
        <MenuItem value={'master'}>Master Bedroom</MenuItem>
      </Select>      
    )
}

export default withStyles(styles)(SelectRoom);