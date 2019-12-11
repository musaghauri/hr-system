import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from '@store';
import Dashboard from '@components/layouts/dashboard';
import '@assets/css/bootstrap.min.css';
import '@assets/scss/paper-dashboard.scss';
import '@assets/demo/demo.css';

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
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </Provider>
    );
  }
}

// export default withRedux(createStore)(withReduxSaga(MyApp));
export default withRedux(MyApp);
