import React from "react";
import { makeData } from "../utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Improvements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: makeData(this.props.improvements[this.props.room])
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  componentDidMount() {
    this.setState({ data : this.props.improvements[this.props.room] });
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
          this.props.updateImprovements(cellInfo.original.id, cellInfo.column.id, e.target.innerHTML);
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
              id: "checkbox",
              accessor: "",
              Cell: ({ original }) => {
                return (
                  <input
                    id='completed'
                    type="checkbox"
                    className="checkbox"
                    checked={ original.completed }
                    onChange={() => alert("'Completed' checkbox is under construction")}
                  />
                );
              },
              Header: 'Completed',
              width: 100,
              sortable: false,
              fixed: 'left'
            },
            {
              Header: "Improvement",
              accessor: "improvement",
              Cell: this.renderEditable,
              width: 200
            },
            {
              Header: "Cost",
              accessor: "cost",
              Cell: this.renderEditable,
              width: 80
            },
            {
              Header: "Price Adj",
              accessor: "estPriceAdj",
              Cell: this.renderEditable,
              width: 80
            },
            {
              Header: "Time to Sell",
              accessor: "estTimeToSell",
              Cell: this.renderEditable,
              width: 200
            },
            {
              Header: "Notes",
              accessor: "notes",
              Cell: this.renderEditable,
              style: { 'white-space': 'unset' },
              minWidth: 200
            },
            {
              Header: "Item Id",
              accessor: "id",
              Cell: this.renderEditable,
              show: false
            }
          ]}
          defaultPageSize={this.props.improvements[this.props.room].length}
          showPagination= {false}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Improvements;