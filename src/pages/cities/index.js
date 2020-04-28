import React, { Component } from 'react';
import CitiesListContainer from '@redux/Cities/List';
import { withAuthSync } from '@utils/auth';
import { getCities } from '@redux/Cities/List/actions';

class CitiesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getCities());
    return { isServer };
  }

  render() {
    return <CitiesListContainer {...this.props} />;
  }
}

export default withAuthSync(CitiesList);
