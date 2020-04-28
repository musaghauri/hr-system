import React, { Component } from 'react';
import ResetPasswordContainer from '@redux/Auth/ResetPassword';
import { withNonAuthSync } from '@utils/non-auth';

class ResetPassword extends Component {
  render() {
    return <ResetPasswordContainer {...this.props} />;
  }
}
export default withNonAuthSync(ResetPassword);
