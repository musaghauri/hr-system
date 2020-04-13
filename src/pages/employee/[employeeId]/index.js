import React, { Component } from "react";
import ViewEmployeeContainer from "@redux/Employees/View";

class View extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "150px" }}>
        <ViewEmployeeContainer/>
      </div>
    );
  }
}
export default View;
