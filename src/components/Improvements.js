import React from "react";
import { makeData, Logo, Tips } from "../utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Improvements extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.improvements[this.props.room]);
    this.state = {
      data: makeData(this.props.improvements[this.props.room], this.props.change)
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  componentDidMount() {
    console.log('didmount');
    this.setState({ data : this.props.improvements[this.props.room] });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
    //return nextProps.room != this.props.room;
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          //const itemId = data[cellInfo.index][cellInfo];
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
          this.props.updateImprovements(cellInfo.original.itemId, cellInfo.column.id, e.target.innerHTML);
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
            },
            {
              Header: "Item Id",
              accessor: "itemId",
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

export default Improvements;
// render(<App />, document.getElementById("root"));