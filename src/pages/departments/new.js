import React, { Component } from 'react';
import AddDepartmentContainer from '@redux/Departments/Add';
import { withAuthSync } from '@utils/auth';

class AddDepartment extends Component {
  render() {
    return <AddDepartmentContainer />;
  }
}

export default withAuthSync(AddDepartment);
