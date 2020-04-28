import React, { Component } from 'react';
import ViewDepartment from '@components/views/Departments/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectDepartment, selectGetDepartmentStatus } from './selectors';

class ViewDepartmentContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { department } = this.props;
    return <ViewDepartment department={department} />;
  }
}
const mapStateToProps = createStructuredSelector({
  department: selectDepartment(),
  getDepartmentStatus: selectGetDepartmentStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDepartmentContainer);
