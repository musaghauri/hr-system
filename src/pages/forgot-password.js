import React, { Component } from 'react';
import ForgotPasswordContainer from '@redux/Auth/ForgotPassword';

class ForgotPassword extends Component {
  render() {
    return <ForgotPasswordContainer {...this.props} />;
  }
}
export default ForgotPassword;
