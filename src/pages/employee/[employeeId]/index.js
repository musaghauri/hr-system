import React, { Component } from 'react';
import ViewEmployeeContainer from '@redux/Employees/View';
import { withAuthSync } from '@utils/auth';
import { getEmployee } from '@redux/Employees/View/actions';

class ViewEmployee extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { employeeId } = query;
    store.dispatch(getEmployee(employeeId));
    return { isServer };
  }
  render() {
    return <ViewEmployeeContainer {...this.props} />;
  }
}

export default withAuthSync(ViewEmployee);
