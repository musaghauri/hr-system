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
    return <LandingPageContainer {...this.props} />;
  }
}

export default LandingPage;
