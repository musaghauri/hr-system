import React, { Component } from 'react';
import ViewRole from '@components/views/Roles/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectRole, selectGetRoleStatus } from './selectors';

class ViewRoleContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { role } = this.props;
    return <ViewRole role={role} />;
  }
}
const mapStateToProps = createStructuredSelector({
  role: selectRole(),
  getRoleStatus: selectGetRoleStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRoleContainer);
