import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, updateValue } from './actions';
import { selectClock } from './selectors';

class LandingPageContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { clock } = this.props;
    return <h1>{clock}</h1>;
  }
}

const mapStateToProps = createStructuredSelector({
  clock: selectClock(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);
