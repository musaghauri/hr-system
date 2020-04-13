import React, { Component } from "react";
import View from "@components/views/Employees/View";
// import Router from "next/router";
// import cookie from "@utils/cookie";
import Router from "next/router";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { bindActionCreators } from "redux";
// import { resetReducer, updateValue } from "./actions";
// import { selectFormDetails } from "./selectors";

class ViewEmployeeContainer extends Component {
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
    return <View />;
  }
}

export default ViewEmployeeContainer;
