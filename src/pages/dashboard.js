import React, { Component } from 'react';
import LandingPageContainer from '@redux/LandingPage';
import { initiateClock } from '@redux/LandingPage/actions';

class LandingPage extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(initiateClock());
    return { isServer };
  }

  render() {
    return <h1>Dashboard</h1>;
  }
}

export default LandingPage;
