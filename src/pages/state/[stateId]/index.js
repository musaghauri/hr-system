import React, { Component } from 'react';
import ViewStateContainer from '@redux/States/View';
import { withAuthSync } from '@utils/auth';
import { getState } from '@redux/States/View/actions';

class ViewState extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { stateId } = query;
    store.dispatch(getState(stateId));
    return { isServer };
  }

  render() {
    return <ViewStateContainer {...this.props} />;
  }
}

export default withAuthSync(ViewState);
