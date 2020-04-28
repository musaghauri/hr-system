import React, { Component } from 'react';
import AddEmployeeContainer from '@redux/Employees/Add';
import { withAuthSync } from '@utils/auth';

class AddEmployee extends Component {
  render() {
    return <AddEmployeeContainer />;
  }
}

export default withAuthSync(AddEmployee);
