import React, { Component } from "react";
import LoginContainer from "@redux/Auth/Login";

class Login extends Component {
  render() {
    return <LoginContainer {...this.props} />;
  }
}
export default Login;
