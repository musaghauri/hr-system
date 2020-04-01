import React, { Component } from "react";
import Register from "@components/Register";
import Router from "next/router";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateFormDetails } from "./actions";
import { selectFormDetails } from "./selectors";

class RegisterContainer extends Component {
  // componentWillMount() {
  //   if (cookie.load("userId")) {
  //     Router.push("/dashboard");
  //   }
  // }

  updateFormDetails = (parentName, name, value) => {
    this.props.onUpdateFormDetails(parentName, name, value);
  };

  submitForm = () => {
    console.log("submitted");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }
  render() {
    const { formDetails } = this.props;
    return (
      <Register
        formDetails={formDetails}
        updateFormDetails={this.updateFormDetails}
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
    onUpdateFormDetails: bindActionCreators(updateFormDetails, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
