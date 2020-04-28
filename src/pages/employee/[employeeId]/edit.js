import React, { Component } from 'react';
import EditEmployeeContainer from '@redux/Employees/Edit';
import { withAuthSync } from '@utils/auth';

class EditEmployee extends Component {
  render() {
    return <EditEmployeeContainer />;
  }
}

export default withAuthSync(EditEmployee);
