import React, { Component } from 'react';
import DepartmentsListContainer from '@redux/Departments/List';
import { withAuthSync } from '@utils/auth';
import { getDepartments } from '@redux/Departments/List/actions';

class DepartmentsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getDepartments());
    return { isServer };
  }

  render() {
    return <DepartmentsListContainer {...this.props} />;
  }
}

export default withAuthSync(DepartmentsList);
