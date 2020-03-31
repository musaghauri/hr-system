import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "@store";
import Dashboard from "@components/layouts/dashboard";
import "semantic-ui-css/semantic.min.css";
import cookie from "@cookie";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      userId: false
    };
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }
  componentWillMount() {
    this.setState({ userId: cookie.load("userId") });
  }

  render() {
    const { userId } = this.state;
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {userId ? (
          <Dashboard>
            {" "}
            <Component {...pageProps} />{" "}
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
