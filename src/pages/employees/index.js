import React, { Component } from 'react';
import EmployeesListContainer from '@redux/Employees/List';
import { withAuthSync } from '@utils/auth';

class EmployeesList extends Component {
  render() {
    return <EmployeesListContainer />;
  }
}

export default withAuthSync(EmployeesList);
