import React, { Component } from 'react';
import EditCityContainer from '@redux/Cities/Edit';
import { withAuthSync } from '@utils/auth';
import { getCity, getCountries } from '@redux/Cities/Edit/actions';

class EditCity extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { cityId } = query;
    store.dispatch(getCity(cityId));
    store.dispatch(getCountries());
    return { isServer, query };
  }

  render() {
    return <EditCityContainer {...this.props} />;
  }
}

export default withAuthSync(EditCity);
