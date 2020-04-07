import React, { Component } from "react";
import Router from "next/router";

class New extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "150px" }}>
        <h1>EmplpoyeeId: {Router.query.employeeId}</h1>
        <p>use this id to get employee</p>
      </div>
    );
  }
}
export default New;
