import React from 'react';
import uuid from 'uuid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ImprovementsCSS.js';
//#region MaterialUI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
//#endregion

function createData(completed, improvement, cost, estPriceAdj, estTimeToSell, notes) {
  return { completed, improvement, cost, estPriceAdj, estTimeToSell, notes };
}

const rows = [
  createData(false, 'paint', '$1200', 0, '3 weeks', 'paint is so-so'),
  createData(false, 'stage', '$600', '$2000', '2 weeks', "room needs staging"),
  createData(false, 'renovate', '--', '--', '--', 'not recommended'),
  createData(true, 'deep clean', '$300', 0, '2 weeks', 'could use it'),
  createData(false, 'landscape', '--', '--', '--', ''),
];

function Improvements({ classes, room }) {
//   const classes = useStyles();

  return (
    <Paper className={classes.root}>
    <Typography color='primary' variant='h4'>Improvements for {room}</Typography>           
      <Table className={classes.improvement}>
        <TableHead>
          <TableRow>  
            <TableCell>Completed</TableCell>
            <TableCell>Improvement</TableCell>
            <TableCell align="right">Cost to Seller</TableCell>
            <TableCell align="right">Est. Price Adj</TableCell>
            <TableCell align="right">Est. Time to Sell</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={uuid()}>
                <TableCell padding="checkbox">
                <Checkbox
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={row.completed}
                    // onChange={onSelectAllClick}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCell>
              <TableCell component="th" scope="row">
                {row.improvement}
              </TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.estPriceAdj}</TableCell>
              <TableCell align="right">{row.estTimeToSell}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default withStyles(styles)(Improvements);