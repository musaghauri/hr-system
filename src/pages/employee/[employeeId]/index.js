import React, { Component } from 'react';
import ViewEmployeeContainer from '@redux/Employees/View';
import { withAuthSync } from '@utils/auth';

class ViewEmployee extends Component {
  render() {
    return <ViewEmployeeContainer />;
  }
}

export default withAuthSync(ViewEmployee);
