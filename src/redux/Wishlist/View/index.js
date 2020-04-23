import React, { Component } from 'react';
import ViewWish from '@components/views/Wishlist/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectWish, selectGetWishStatus } from './selectors';

class ViewWishContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { wish } = this.props;
    return <ViewWish wish={wish} />;
  }
}
const mapStateToProps = createStructuredSelector({
  wish: selectWish(),
  getWishStatus: selectGetWishStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewWishContainer);
