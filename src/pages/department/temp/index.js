import React, { Component } from 'react';
import ViewDepartmentContainer from '@redux/Departments/View';
import { withAuthSync } from '@utils/auth';
import { getDepartment } from '@redux/Departments/View/actions';

class ViewDepartment extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { departmentId } = query;
    store.dispatch(getDepartment(departmentId));
    return { isServer };
  }

  render() {
    return <ViewDepartmentContainer {...this.props} />;
  }
}

export default withAuthSync(ViewDepartment);
