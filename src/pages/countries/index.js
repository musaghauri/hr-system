import React, { Component } from 'react';
import CountriesListContainer from '@redux/Countries/List';
import { withAuthSync } from '@utils/auth';
import { getCountries } from '@redux/Countries/List/actions';

class CountriesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getCountries());
    return { isServer };
  }

  render() {
    return <CountriesListContainer {...this.props} />;
  }
}

export default withAuthSync(CountriesList);
