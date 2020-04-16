import React, { Component } from 'react';
import AddStateContainer from '@redux/States/Add';
import { withAuthSync } from '@utils/auth';
import { getCountries } from '@redux/States/Add/actions';

class AddState extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getCountries());
    return { isServer };
  }

  render() {
    return <AddStateContainer {...this.props} />;
  }
}

export default withAuthSync(AddState);
