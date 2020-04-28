import React, { Component } from 'react';
import ViewState from '@components/views/States/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectState, selectGetStateStatus } from './selectors';

class ViewStateContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { state } = this.props;
    return <ViewState state={state} />;
  }
}
const mapStateToProps = createStructuredSelector({
  state: selectState(),
  getStateStatus: selectGetStateStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStateContainer);
