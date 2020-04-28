import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginContainer from '@redux/Auth/Login';
import { withNonAuthSync } from '@utils/non-auth';
import { getRoles } from '@redux/Auth/Login/actions';

class Login extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getRoles());
    return { isServer };
  }

  render() {
    return <LoginContainer {...this.props} />;
  }
}

export default withNonAuthSync(connect()(Login));
