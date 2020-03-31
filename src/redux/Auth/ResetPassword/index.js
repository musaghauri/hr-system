import React, { Component } from "react";
import ResetPassword from "@components/views/Auth/ResetPassword";
import Router from "next/router";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateFormDetails } from "./actions";
import { selectformDetails } from "./selectors";

class ResetPasswordContainer extends Component {
  // componentWillMount() {
  //   if (cookie.load("userId")) {
  //     Router.push("/dashboard");
  //   }
  // }

  updateFormDetails = (name, value) => {
    this.props.onUpdateFormDetails(name, value);
  };

  submitForm = () => {
    Router.push("/login");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }
  render() {
    const { formDetails } = this.props;
    return (
      <ResetPassword
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);
