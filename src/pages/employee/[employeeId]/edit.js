import React, { Component } from 'react';
import EditEmployeeContainer from '@redux/Employees/Edit';
import { withAuthSync } from '@utils/auth';
import { 
  getEmployee, 
  getRoles, 
  getCountries, 
  getDepartments,
  getAssets
} from '@redux/Employees/Edit/actions';

class EditEmployee extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { employeeId } = query;
    store.dispatch(getEmployee(employeeId));
    store.dispatch(getRoles());
    store.dispatch(getCountries());
    store.dispatch(getDepartments());
    store.dispatch(getAssets());
    return { isServer };
  }
  render() {
    return <EditEmployeeContainer {...this.props} />;
  }
}

export default withAuthSync(EditEmployee);
