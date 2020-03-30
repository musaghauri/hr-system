import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from '@store';
import Dashboard from '@components/layouts/dashboard';
import 'semantic-ui-css/semantic.min.css';
import cookie from 'react-cookies';
import LoginPage from './login';
import Router from 'next/router';
// import { save, remove, load } from '../../utils/cookie'

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      userId: false,
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
  componentWillMount() {
    this.setState({ userId: cookie.load('userId') })
  }
  onLogin = (userId) => {
    console.log('onlogin', userId);
    this.setState({ userId });
    cookie.save('userId', userId, { path: '/' })
    Router.push('/dashboard')
  }
  onLogout = () => {
    cookie.remove('userId', { path: '/' })
    Router.push('/login')
  }

  handleforgotPassword = () => {
    this.setState({ forgotPassword: true })
  }

  render() {
    const { userId } = this.state;
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {
          !userId && <LoginPage onSuccess={this.onLogin} loginUserStatus={userId} />
        }
        {
          userId &&
          <Dashboard onLogout={this.onLogout}>
            <Component {...pageProps} />
          </Dashboard>
        }
      </Provider>
    );
  }
}

// export default withRedux(createStore)(withReduxSaga(MyApp));
export default withRedux(MyApp);
