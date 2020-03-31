import React, { Component } from "react";
import Login from "@components/views/Auth/Login";
import Router from "next/router";
import cookie from "@cookie";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateFormDetails } from "./actions";
import { selectformDetails } from "./selectors";

class LoginContainer extends Component {
  // componentWillMount() {
  //   if (cookie.load("userId")) {
  //     Router.push("/dashboard");
  //   }
  // }

  updateFormDetails = (name, value) => {
    this.props.onUpdateFormDetails(name, value);
  };

  submitForm = () => {
    const userId = "uniqueId";
    cookie.save("userId", userId, { path: "/" });
    Router.push("/dashboard");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }

  render() {
    const { formDetails } = this.props;
    return (
      <Login
        formDetails={formDetails}
        updateFormDetails={this.updateFormDetails}
        handleSubmit={this.submitForm}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  formDetails: selectformDetails()
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateFormDetails: bindActionCreators(updateFormDetails, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
