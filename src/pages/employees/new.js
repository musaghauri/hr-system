import React, { Component } from "react";
import AddEmployeeContainer from "@redux/Employees/Add";
class New extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "150px" }}>
        <AddEmployeeContainer />
      </div>
    );
  }
}
export default New;
