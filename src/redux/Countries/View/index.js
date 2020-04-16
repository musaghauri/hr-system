import React, { Component } from 'react';
import ViewCountry from '@components/views/Countries/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectCountry, selectGetCountryStatus } from './selectors';

class ViewCountryContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { country } = this.props;
    return <ViewCountry country={country} />;
  }
}
const mapStateToProps = createStructuredSelector({
  country: selectCountry(),
  getCountryStatus: selectGetCountryStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCountryContainer);
