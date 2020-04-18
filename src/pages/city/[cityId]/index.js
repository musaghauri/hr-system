import React, { Component } from 'react';
import ViewCityContainer from '@redux/Cities/View';
import { withAuthSync } from '@utils/auth';
import { getCity } from '@redux/Cities/View/actions';

class ViewCity extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { cityId } = query;
    store.dispatch(getCity(cityId));
    return { isServer };
  }

  render() {
    return <ViewCityContainer {...this.props} />;
  }
}

export default withAuthSync(ViewCity);
