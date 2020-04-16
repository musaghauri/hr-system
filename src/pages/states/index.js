import React, { Component } from 'react';
import StatesListContainer from '@redux/States/List';
import { withAuthSync } from '@utils/auth';
import { getStates } from '@redux/States/List/actions';

class StatesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getStates());
    return { isServer };
  }

  render() {
    return <StatesListContainer {...this.props} />;
  }
}

export default withAuthSync(StatesList);
