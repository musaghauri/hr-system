import React, { Component } from 'react';
import ViewCity from '@components/views/Cities/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectCity, selectGetCityStatus } from './selectors';

class ViewCityContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { city } = this.props;
    return <ViewCity city={city} />;
  }
}
const mapCityToProps = createStructuredSelector({
  city: selectCity(),
  getCityStatus: selectGetCityStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapCityToProps, mapDispatchToProps)(ViewCityContainer);
