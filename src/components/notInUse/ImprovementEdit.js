import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/ImprovementEditCSS';
//#region Material UI
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
//#endregion

function ImprovementEdit({ classes, row, updateImprovement, updateIsEditting, editCellFocus, updateCellFocus }) {
    const [ cellFocus, setCellFocus ] = useState(editCellFocus);
    const [ rowEditValue, setRowEditValue ] = useState(row);
    
    function handleChange(e) {
        const newRow = {...row, [e.target.name]: e.target.value};
        setRowEditValue(newRow);
        setCellFocus(e.target.name);
    }
    function handleBlur(e) {
        updateImprovement(row.id, rowEditValue);
        
    }
    function saveImprovement() {
        updateIsEditting(false);
        updateImprovement(row.id, rowEditValue);
    }
    function checkForEnterKey(e) {
        const inputFieldArray = [ 'improvement', 'cost', 'estPriceAdj', 'estTimeToSell', 'notes'];
        const oldInputFieldIdx = inputFieldArray.findIndex(inputField => inputField === cellFocus );
        if (e.keyCode === 13) saveImprovement();
        if (oldInputFieldIdx !== -1) {
            if (e.keyCode === 9 && !e.shiftKey) {
                if (oldInputFieldIdx < inputFieldArray.length-1) {
                    const newFocus = inputFieldArray[oldInputFieldIdx+1];
                    updateCellFocus(newFocus);
                }               
            }
            if (e.keyCode == 9 && e.shiftKey) {
                if (oldInputFieldIdx > 0) {
                    const newFocus = inputFieldArray[oldInputFieldIdx-1];
                    updateCellFocus(newFocus);
                }
            }
        }
    }
    useEffect(() => {
        console.log(cellFocus);
        if (cellFocus !== '') {
            document.querySelector(`[name='${cellFocus}']`).focus();
        }
        window.addEventListener('keydown', checkForEnterKey);
      }, [rowEditValue]);
    return (
        <>
        <TableCell key={uuid()} padding="checkbox">
            <Checkbox
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowEditValue.completed}
                onChange={handleChange}
                name='completed'
                inputProps={{ 'aria-label': 'select all desserts' }}
            />
        </TableCell>
        <TableCell key={uuid()} component="th" scope="row">
            <input 
                type='text' 
                value={rowEditValue.improvement} 
                onChange={handleChange}
                onBlur={handleBlur}
                name='improvement' 
        />
        </TableCell>
        <TableCell key={uuid()} align="right">
            <input 
                type='text' 
                value={rowEditValue.cost} 
                onChange={handleChange}
                onBlur={handleBlur} 
                name='cost'
        />
        </TableCell>
        <TableCell key={uuid()} align="right">
            <input 
                type='text' 
                value={rowEditValue.estPriceAdj} 
                onChange={handleChange} 
                onBlur={handleBlur}
                name='estPriceAdj'
        />
        </TableCell>
        <TableCell key={uuid()} align="right">
            <input 
                type='text' 
                value={rowEditValue.estTimeToSell} 
                onChange={handleChange}
                onChange={handleBlur}
                name='estTimeToSell'
        />
        </TableCell>
        <TableCell key={uuid()} align="right">
            <input 
                type='text' 
                value={rowEditValue.notes} 
                onChange={handleChange}
                onBlur={handleBlur} 
                name='notes'
        />
        </TableCell>
        <TableCell padding="checkbox">
            <IconButton aria-label="Save" onClick={saveImprovement}>
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