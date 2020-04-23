import React, { Component } from 'react';
import ViewAsset from '@components/views/Assets/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectAsset, selectGetAssetStatus } from './selectors';

class ViewAssetContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { asset } = this.props;
    return <ViewAsset asset={asset} />;
  }
}
const mapStateToProps = createStructuredSelector({
  asset: selectAsset(),
  getAssetStatus: selectGetAssetStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssetContainer);
