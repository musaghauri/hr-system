import React, { Component } from 'react';
import EditCountryContainer from '@redux/Countries/Edit';
import { withAuthSync } from '@utils/auth';
import { getCountry } from '@redux/Countries/Edit/actions';

class EditCountry extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { countryId } = query;
    store.dispatch(getCountry(countryId));
    return { isServer, query };
  }

  render() {
    return <EditCountryContainer {...this.props} />;
  }
}

export default withAuthSync(EditCountry);
