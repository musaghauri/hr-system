import React, { Component } from 'react';
import EmployeesListContainer from '@redux/Employees/List';
import { withAuthSync } from '@utils/auth';
import { getEmployees } from '@redux/Employees/List/actions';

class EmployeesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getEmployees());
    return { isServer };
  }
  render() {
    return <EmployeesListContainer {...this.props} />;
  }
}

export default withAuthSync(EmployeesList);
