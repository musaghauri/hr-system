import React, { Component } from 'react';
import EditDepartmentContainer from '@redux/Departments/Edit';
import { withAuthSync } from '@utils/auth';
import { getDepartment } from '@redux/Departments/Edit/actions';

class EditDepartment extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { departmentId } = query;
    store.dispatch(getDepartment(departmentId));
    return { isServer, query };
  }

  render() {
    return <EditDepartmentContainer {...this.props} />;
  }
}

export default withAuthSync(EditDepartment);
