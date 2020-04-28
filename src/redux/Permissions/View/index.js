import React, { Component } from 'react';
import ViewPermission from '@components/views/Permissions/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectPermission, selectGetPermissionStatus } from './selectors';

class ViewPermissionContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { permission } = this.props;
    return <ViewPermission permission={permission} />;
  }
}
const mapStateToProps = createStructuredSelector({
  permission: selectPermission(),
  getPermissionStatus: selectGetPermissionStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPermissionContainer);
