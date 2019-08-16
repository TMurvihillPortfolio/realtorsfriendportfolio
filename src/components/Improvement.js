import React, { useState } from 'react';
import uuid from 'uuid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

function Improvement(props) {
    const { row, updateImprovement } = props;
    const [ cellId, setCellId ] = useState('')
    const [ isEditting, setIsEditting ] = useState(false);
    function handleChange(e) {
        console.log(e);
        setCellId(e.target.id);
        updateImprovement(row.id, e.target.value);
    }
    return (
        <TableRow key={uuid()}>
            <TableCell key={uuid()} padding="checkbox">
                <Checkbox
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={row.completed}
                    // onChange={onSelectAllClick}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCell>
              <TableCell key={uuid()} component="th" scope="row">
                <input type='text' value={row.improvement} onChange={handleChange}/>
              </TableCell>
              <TableCell key={uuid()} align="right">{row.cost}</TableCell>
              <TableCell key={uuid()} align="right">{row.estPriceAdj}</TableCell>
              <TableCell key={uuid()} align="right">{row.estTimeToSell}</TableCell>
              <TableCell key={uuid()} align="right">{row.notes}</TableCell>
            </TableRow>
        
    )
}

export default Improvement;