import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from '@store';
import Dashboard from '@components/layouts/dashboard';
import 'semantic-ui-css/semantic.min.css';
import cookie from '@utils/cookie';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {cookie.load('hrms') ? (
          <Dashboard>
            {' '}
            <Component {...pageProps} />{' '}
          </Dashboard>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    );
  }
}

// export default withRedux(createStore)(withReduxSaga(MyApp));
export default withRedux(MyApp);
