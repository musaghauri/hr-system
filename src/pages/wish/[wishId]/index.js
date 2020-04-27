import React, { Component } from 'react';
import ViewWishlistContainer from '@redux/Wishlist/View';
import { withAuthSync } from '@utils/auth';
import { getWish } from '@redux/Wishlist/View/actions';

class ViewWish extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { wishId } = query;
    store.dispatch(getWish(wishId));
    return { isServer };
  }

  render() {
    return <ViewWishlistContainer {...this.props} />;
  }
}

export default withAuthSync(ViewWish);
