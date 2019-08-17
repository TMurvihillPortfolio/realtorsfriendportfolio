import React, { useState } from 'react';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
import styles from '../styles/ImprovementEditCSS';

function ImprovementEdit({ classes, row, updateImprovement }) {
    const [ cellId, setCellId ] = useState('')
    function handleChange(e) {
        console.log(e);
        setCellId(e.target.id);
        updateImprovement(row.id, e.target.value);
    }
    return (
        <>
        <TableCell key={uuid()} padding="checkbox">
            <Checkbox
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={row.completed}
                // onChange={onSelectAllClick}
                inputProps={{ 'aria-label': 'select all desserts' }}
            />
        </TableCell>
        <TableCell key={uuid()} component="th" scope="row">
            <input type='text' value={row.improvement} onChange={handleChange} />
        </TableCell>
        <TableCell key={uuid()} align="right">{row.cost}</TableCell>
        <TableCell key={uuid()} align="right">{row.estPriceAdj}</TableCell>
        <TableCell key={uuid()} align="right">{row.estTimeToSell}</TableCell>
        <TableCell key={uuid()} align="right">{row.notes}</TableCell>
        <TableCell padding="checkbox">
            <IconButton aria-label="Save" onClick={()=>alert('saveClicked')}>
                <SaveIcon/>
            </IconButton>
        </TableCell>
        <TableCell padding="checkbox">
            <IconButton aria-label="Cancel" onClick={()=>alert('cancelclicked')}>
                <CancelIcon/>
            </IconButton>
        </TableCell>
        </>
    )
}
export default withStyles(styles)(ImprovementEdit)