import React, { Component } from "react";
import ForgotPassword from "@components/views/Auth/ForgotPassword";
import Router from "next/router";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateValue } from "./actions";
import { selectFormDetails } from "./selectors";

class ForgotPasswordContainer extends Component {
  submitForm = () => {
    Router.push("/reset-password");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }

  render() {
    const { formDetails, onUpdateValue } = this.props;
    return (
      <ForgotPassword
        formDetails={formDetails}
        updateValue={onUpdateValue}
        handleSubmit={this.submitForm}
      />
    );
  }
}
const mapStateToProps = createStructuredSelector({
  formDetails: selectFormDetails()
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
