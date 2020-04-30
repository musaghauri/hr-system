import React, { Component } from 'react';
import AddEmployeeContainer from '@redux/Employees/Add';
import { withAuthSync } from '@utils/auth';
import { getRoles, getCountries, getDepartments, getAssets } from '@redux/Employees/Add/actions';

class AddEmployee extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getRoles());
    store.dispatch(getCountries());
    store.dispatch(getDepartments());
    store.dispatch(getAssets());
    return { isServer };
  }
  render() {
    return <AddEmployeeContainer {...this.props} />;
  }
}

export default withAuthSync(AddEmployee);
