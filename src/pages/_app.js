import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from '@store';
import Dashboard from '@components/layouts/dashboard';
import 'semantic-ui-css/semantic.min.css';
import Login from '../components/login';
import ForgotPassword from '../components/forgotPassword';
import ResetPassword from '../components/resetPassword';
import { Container } from 'semantic-ui-react'

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      forgotPassword: false,
      resetPassword: false
    }
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }
  handleSubmit = () => {
    this.setState({ login: true })
  }
  handleforgotPassword = () => {
    this.setState({ forgotPassword: true })
  }

  render() {
    const { login, forgotPassword } = this.state;
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {
          !login && !forgotPassword &&
          <Container textAlign='center'>
            < Login
              handleSubmit={this.handleSubmit}
              handleforgotPassword={this.handleforgotPassword}
            />
          </Container>
        }
        {
          !login && forgotPassword &&
          <Container textAlign='center'>
            <ForgotPassword
              handleSubmit={this.handleSubmit}
            />
          </Container>
        }
        {
          login &&
          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
        }
      </Provider>
    );
  }
}

// export default withRedux(createStore)(withReduxSaga(MyApp));
export default withRedux(MyApp);
