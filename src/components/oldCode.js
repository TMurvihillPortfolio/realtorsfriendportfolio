/***********
 * First version of Improvements.js before react-table
 ***********/
import React, { useState } from 'react';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ImprovementsCSS.js';
//#region MaterialU
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
//#endregion
import Improvement from './notInUse/Improvement';
import { _INITIAL_IMPROVEMENTS } from '../assets/constants';

function createData(completed, improvement, cost, estPriceAdj, estTimeToSell, notes, id) {
  return { completed, improvement, cost, estPriceAdj, estTimeToSell, notes, id };
}

const rowsArray = [
  createData(false, 'paint', '$1200', 0, '3 weeks', 'paint is so-so', uuid()),
  createData(false, 'stage', '$600', '$2000', '2 weeks', "room needs staging", uuid()),
  createData(false, 'renovate', '--', '--', '--', 'not recommended', uuid()),
  createData(true, 'deep clean', '$300', 0, '2 weeks', 'could use it', uuid()),
  createData(false, 'landscape', '--', '--', '--', '', uuid()),
];

function Improvements({ classes, room }) {
    //const [ rows, setRows ] = useState(rowsArray);
    const [ improvements, setImprovements ] = useState(_INITIAL_IMPROVEMENTS);
    const roomObject = improvements[room];
    console.log('room');
    console.log(room);
    console.log('roomobj');
    console.log(roomObject);
    const keysArray = Object.keys(improvements[room]);
    let improvementName;
    const rows = keysArray.map(key => {
      improvementName = key;
      return {...improvements.living[key]};
    });
    
    function updateImprovement(id, newValue) {
        const newRoomImprovements = roomObject.map(improvement => {
            if (improvement.id === id ) {
                return newValue;
            } else {
                return improvement;
            }           
        });
        setImprovements({...improvements, [room]:newRoomImprovements});
    }
  return (
    <Paper className={classes.root}>
    <Typography className={classes.heading} variant='h4'>Improvements for {room}</Typography>           
      <Table className={classes.improvement}>
        <TableHead>
          <TableRow>  
            <TableCell></TableCell>
            <TableCell>Improvement</TableCell>
            <TableCell align="right">Cost to Seller</TableCell>
            <TableCell align="right">Est. Price Adj</TableCell>
            <TableCell align="right">Est. Time to Sell</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <Improvement row={row} improvementName={improvementName} updateImprovement={updateImprovement}/>  */}
          {roomObject.map(row => (
              <Improvement 
                key={uuid()}
                row={row} 
                updateImprovement={updateImprovement}
              />          
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default withStyles(styles)(Improvements);

/*********
 * original working TestEditableTable.js
 *********/
import React from "react";
import { makeData, Logo, Tips } from "../utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class TestEditableTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Full Name",
              id: "full",
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + " " + d.lastName
                  }}
                />
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default TestEditableTable;
// render(<App />, document.getElementById("root"));

/*****************
 * Working except cellInfo
 */

import React, { useState } from "react";
import { makeData, Logo, Tips } from "../utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

function TestEditableTable(props) {
    const [ data, setData ] = useState(makeData());
    function renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    setData(data);
                }}
                dangerouslySetInnerHTML={{
                __html: data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              Cell: renderEditable()
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: renderEditable()
            },
            {
              Header: "Full Name",
              id: "full",
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + " " + d.lastName
                  }}
                />
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
}

export default TestEditableTable;
// render(<App />, document.getElementById("root"));
