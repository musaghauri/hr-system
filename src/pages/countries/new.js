import React, { Component } from 'react';
import AddCountryContainer from '@redux/Countries/Add';
import { withAuthSync } from '@utils/auth';

class AddCountry extends Component {
  render() {
    return <AddCountryContainer />;
  }
}

export default withAuthSync(AddCountry);
