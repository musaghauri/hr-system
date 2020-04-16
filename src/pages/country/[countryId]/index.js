import React, { Component } from 'react';
import ViewCountryContainer from '@redux/Countries/View';
import { withAuthSync } from '@utils/auth';
import { getCountry } from '@redux/Countries/View/actions';

class ViewCountry extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { countryId } = query;
    store.dispatch(getCountry(countryId));
    return { isServer };
  }

  render() {
    return <ViewCountryContainer {...this.props} />;
  }
}

export default withAuthSync(ViewCountry);
