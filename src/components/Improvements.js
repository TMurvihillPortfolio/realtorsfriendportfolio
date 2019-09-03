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
              id: "checkbox",
              accessor: "",
              Cell: ({ original }) => {
                return (
                  <input
                    id='completed'
                    type="checkbox"
                    className="checkbox"
                    checked={ original.completed }
                    onChange={() => alert("Check/Uncheck completed under construction")}
                  />
                );
              },
              Header: 'Completed',
              width: 100,
              sortable: false
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