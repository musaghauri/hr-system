import React, { Component } from 'react';
import EditStateContainer from '@redux/States/Edit';
import { withAuthSync } from '@utils/auth';
import { getState, getCountries } from '@redux/States/Edit/actions';

class EditState extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { stateId } = query;
    store.dispatch(getState(stateId));
    store.dispatch(getCountries());
    return { isServer, query };
  }

  render() {
    return <EditStateContainer {...this.props} />;
  }
}

export default withAuthSync(EditState);
