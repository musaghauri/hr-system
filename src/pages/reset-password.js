import React, { Component } from "react";
import ResetPasswordContainer from "@redux/Auth/ResetPassword";

class ResetPassword extends Component {
  render() {
    return <ResetPasswordContainer {...this.props} />;
  }
}
export default ResetPassword;
