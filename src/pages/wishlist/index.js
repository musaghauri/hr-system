import React, { Component } from 'react';
import WishlistContainer from '@redux/Wishlist/List';
import { withAuthSync } from '@utils/auth';
import { getWishlist } from '@redux/Wishlist/List/actions';

class Wishlist extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getWishlist());
    return { isServer };
  }

  render() {
    return <WishlistContainer {...this.props} />;
  }
}

export default withAuthSync(Wishlist);
