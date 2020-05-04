import React, { Component } from 'react';
import ViewEmployee from '@components/views/Employees/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectEmployee, selectGetEmployeeStatus } from './selectors';

class ViewEmployeeContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { employee } = this.props;
    return <ViewEmployee employee={employee} />;
  }
}
const mapStateToProps = createStructuredSelector({
  employee: selectEmployee(),
  getEmployeeStatus: selectGetEmployeeStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEmployeeContainer);
