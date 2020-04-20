import React, { Component } from 'react';
import EmployeesListContainer from '@redux/Employees/List';
import AssestsListContainer from '@redux/Assets/List';
import { getAssets } from '@redux/Assets/List/actions';
import { withAuthSync } from '@utils/auth';

class EmployeesList extends Component {
  // static getInitialProps(props) {
    // const { isServer, store } = props.ctx;
    // store.dispatch(getAssets());
    // return { isServer };
  // }
  render() {
    return (
      <div>
        <EmployeesListContainer />
        <AssestsListContainer />
      </div>
    );
  }
}

export default withAuthSync(EmployeesList);
