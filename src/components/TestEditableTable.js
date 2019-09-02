/*********
 * original working TestEditableTable.js
 *********/
import React from "react";
import { makeData, Logo, Tips } from "../utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class TestEditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: makeData(this.props.room)
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  componentDidMount() {
    console.log('didmount');
    this.setState({ data : makeData(this.props.room) });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.room != this.props.room;
  }
  renderEditable(cellInfo) {
      // console.log(cellInfo);
      // console.log(this.state.data);
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
    
    
    this.setState({ data : makeData(this.props.room) });
    const { data } = this.state;
    console.log(data);
    console.log(this.props);
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Completed",
              accessor: "completed",
              Cell: this.renderEditable
            },
            {
              Header: "Improvement",
              accessor: "improvement",
              Cell: this.renderEditable
            },
            {
              Header: "Cost",
              accessor: "cost",
              Cell: this.renderEditable
            },
            {
              Header: "Price Adj",
              accessor: "estPriceAdj",
              Cell: this.renderEditable
            },
            {
              Header: "Time to Sell",
              accessor: "estTimeToSell",
              Cell: this.renderEditable
            },
            {
              Header: "Notes",
              accessor: "notes",
              Cell: this.renderEditable
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