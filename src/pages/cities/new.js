import React, { Component } from 'react';
import AddCityContainer from '@redux/Cities/Add';
import { withAuthSync } from '@utils/auth';
import { getCountries } from '@redux/Cities/Add/actions';

class AddCity extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getCountries());
    return { isServer };
  }

  render() {
    return <AddCityContainer {...this.props} />;
  }
}

export default withAuthSync(AddCity);
