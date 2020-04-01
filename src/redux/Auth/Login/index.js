import React, { Component } from "react";
import Login from "@components/views/Auth/Login";
import Router from "next/router";
import cookie from "@utils/cookie";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateValue } from "./actions";
import { selectFormDetails } from "./selectors";

class LoginContainer extends Component {
  submitForm = () => {
    const userId = "uniqueId";
    cookie.save("userId", userId, { path: "/" });
    Router.push("/dashboard");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }

  render() {
    const { formDetails, onUpdateValue } = this.props;
    return (
      <Login
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
