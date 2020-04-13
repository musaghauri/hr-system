import React, { Component } from "react";
import EditEmployeeContainer from "@redux/Employees/Edit";

class New extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "150px" }}>
        <EditEmployeeContainer />
      </div>
    );
  }
}
export default New;
