import React, { Component } from 'react';
import ViewBranch from '@components/views/Branches/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectBranch, selectGetBranchStatus } from './selectors';

class ViewBranchContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { branch } = this.props;
    return <ViewBranch branch={branch} />;
  }
}
const mapStateToProps = createStructuredSelector({
  branch: selectBranch(),
  getBranchStatus: selectGetBranchStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBranchContainer);
