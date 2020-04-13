import React, { Component } from "react";
import EditForm from "@components/views/Employees/Form";
// import Router from "next/router";
// import cookie from "@utils/cookie";
import Router from "next/router";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { bindActionCreators } from "redux";
// import { resetReducer, updateValue } from "./actions";
// import { selectFormDetails } from "./selectors";

class EditEmployeeContainer extends Component {
  //   submitForm = () => {
  //     const userId = "uniqueId";
  //     cookie.save("userId", userId, { path: "/" });
  //     Router.push("/dashboard");
  //   };

  // componentWillUnmount() {
  //   this.props.onResetReducer();
  // }

  render() {
    // const { formDetails, onUpdateValue } = this.props;
    return <EditForm />;
    // <>
    {
      /* <h1>EmplpoyeeId: {Router.query.employeeId}</h1>
        <p>use this id to get employee</p> */
    }
    // </>
  }
}

export default EditEmployeeContainer;
