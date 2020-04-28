import React, { Component } from 'react';
import ViewPriority from '@components/views/Priorities/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectPriority, selectGetPriorityStatus } from './selectors';

class ViewPriorityContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { priority } = this.props;
    return <ViewPriority priority={priority} />;
  }
}
const mapStateToProps = createStructuredSelector({
  priority: selectPriority(),
  getPriorityStatus: selectGetPriorityStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPriorityContainer);
