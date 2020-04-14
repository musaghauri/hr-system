import React, { Component } from 'react';
import ForgotPasswordContainer from '@redux/Auth/ForgotPassword';
import { withNonAuthSync } from '@utils/non-auth';

class ForgotPassword extends Component {
  render() {
    return <ForgotPasswordContainer {...this.props} />;
  }
}

export default withNonAuthSync(ForgotPassword);
