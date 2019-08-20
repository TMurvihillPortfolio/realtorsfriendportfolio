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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ImprovementEdit from './ImprovementEdit';

function Improvement(props) {
    const { row, updateImprovement } = props;
    const [ isEditting, setIsEditting ] = useState(false);
    const [ editCellFocus, setEditCellFocus ] = useState('improvement');
    function updateCellFocus(newCellFocus) {
        setEditCellFocus(newCellFocus);
    }
    return (
        <TableRow key={uuid()}>
            {isEditting?
                <ImprovementEdit 
                    row={row} 
                    updateImprovement={updateImprovement} 
                    updateIsEditting={setIsEditting} 
                    editCellFocus={editCellFocus}
                    updateCellFocus={updateCellFocus}
                />
            :
                <>
                <TableCell key={uuid()} padding="checkbox">
                    <Checkbox
                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={row.completed}
                        onChange={ () => setIsEditting(true)}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                <TableCell key={uuid()} component="th" scope="row">
                    {row.improvement}
                </TableCell>
                <TableCell key={uuid()} align="right">{row.cost}</TableCell>
                <TableCell key={uuid()} align="right">{row.estPriceAdj}</TableCell>
                <TableCell key={uuid()} align="right">{row.estTimeToSell}</TableCell>
                <TableCell key={uuid()} align="right">{row.notes}</TableCell>
                <TableCell padding="checkbox">
                    <IconButton aria-label="Delete" onClick={()=>alert('deleteClicked')}>
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
                <TableCell padding="checkbox">
                    <IconButton aria-label="Edit" onClick={()=>setIsEditting(true)}>
                        <EditIcon/>
                    </IconButton>
                </TableCell>
                </>
            }
        </TableRow>       
    )
}

export default Improvement;